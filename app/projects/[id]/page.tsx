"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Upload } from 'lucide-react';

const projects = {
  1: { name: 'Rock Classification', images: ['/rock1.jpg', '/rock2.jpg', '/rock3.jpg'] },
  2: { name: 'Plant Species', images: ['/plant1.jpg', '/plant2.jpg', '/plant3.jpg'] },
  3: { name: 'Wildlife Monitoring', images: ['/wildlife1.jpg', '/wildlife2.jpg', '/wildlife3.jpg'] },
  4: { name: 'Urban Planning', images: ['/urban1.jpg', '/urban2.jpg', '/urban3.jpg'] },
};

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects[projectId];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = project.images.filter(image =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-6 w-6" />
          </Link>
          <h1 className="text-3xl font-bold">{project.name}</h1>
        </div>

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search images..."
            className="w-1/2 p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button>
            <Upload className="mr-2 h-4 w-4" /> Upload Images
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;