import React from 'react';
import { Zap, Shield, TrendingUp, Users, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions that drive efficiency and growth.',
      features: ['Process Automation', 'Cloud Migration', 'Digital Strategy']
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies that deliver measurable results and accelerate your business growth.',
      features: ['SEO Optimization', 'Social Media', 'Analytics']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats and ensure compliance.',
      features: ['Threat Assessment', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Consulting',
      description: 'Expert consulting services to optimize your team performance and organizational structure.',
      features: ['Leadership Training', 'Process Optimization', 'Change Management']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Expansion',
      description: 'Strategic guidance for expanding your business into new markets and regions worldwide.',
      features: ['Market Research', 'Compliance', 'Local Partnerships']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Solutions',
      description: 'Custom mobile applications and responsive solutions for the modern digital landscape.',
      features: ['App Development', 'Mobile Strategy', 'User Experience']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive business solutions designed to help your company thrive
            in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors group">
                Learn More
                <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;