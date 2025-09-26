import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Современный веб-дизайн",
    description: "Минималистичный дизайн для корпоративного сайта с акцентом на пользовательский опыт",
    image: "/img/f07ccedb-28e1-4a46-b7ad-9b167e67f280.jpg",
    category: "Web Design"
  },
  {
    id: 2,
    title: "Креативная концепция",
    description: "Брендинг и визуальная айдентика для технологичного стартапа",
    image: "/img/a2df4f4a-8301-475c-ba3e-2fcfa6ab75a9.jpg",
    category: "Branding"
  },
  {
    id: 3,
    title: "Цифровое искусство",
    description: "Серия иллюстраций для мобильного приложения с фокусом на современную эстетику",
    image: "/img/cd7e1235-2a60-4beb-9ba8-876f0f7ed12e.jpg",
    category: "Digital Art"
  }
];

function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight">
              PORTFOLIO
            </div>
            <div className="flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'gallery', label: 'Работы' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">
            Создаю
            <br />
            <span className="font-bold">Впечатления</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
            Дизайнер и творец цифровых решений. Специализируюсь на создании 
            минималистичных и функциональных интерфейсов.
          </p>
          <Button 
            onClick={() => scrollToSection('gallery')}
            className="px-8 py-3 text-lg font-medium rounded-none"
          >
            Посмотреть работы
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-light mb-8">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Более 5 лет создаю цифровые продукты, которые решают реальные задачи бизнеса. 
                Верю в силу простоты и функциональности.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мой подход основан на глубоком понимании потребностей пользователей 
                и стремлении к созданию интуитивных решений.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-4">Навыки</h3>
                {[
                  'UI/UX Дизайн',
                  'Веб-разработка',
                  'Брендинг',
                  'Типографика',
                  'Пользовательские исследования'
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center animate-scale-in">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/30 rounded-none flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-6 animate-fade-in">Избранные работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Коллекция проектов, отражающих мой подход к дизайну и разработке
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl p-0 border-0">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light mb-6">Готовы к сотрудничеству?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="rounded-none">
              <Icon name="Mail" size={16} className="mr-2" />
              Написать
            </Button>
            <Button variant="outline" className="rounded-none">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;