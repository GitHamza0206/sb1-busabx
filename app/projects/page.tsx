"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlusCircle, Folder } from 'lucide-react';

const projects = [
  { id: 1, name: 'Rock Classification', imageCount: 124, thumbnail: '/rock-classification-thumb.jpg' },
  { id: 2, name: 'Plant Species', imageCount: 89, thumbnail: '/plant-species-thumb.jpg' },
  { id: 3, name: 'Wildlife Monitoring', imageCount: 256, thumbnail: '/wildlife-monitoring-thumb.jpg' },
  { id: 4, name: 'Urban Planning', imageCount: 78, thumbnail: '/urban-planning-thumb.jpg' },
];

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-2 mb-6 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <div className="flex items-center text-gray-600">
                    <Folder className="mr-2 h-4 w-4" />
                    <span>{project.imageCount} images</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;