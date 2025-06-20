import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'BusinessPro transformed our operations completely. Their digital transformation strategy increased our efficiency by 300% and helped us scale rapidly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The growth marketing strategies implemented by BusinessPro resulted in a 250% increase in our lead generation within just 6 months.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'COO, SecureFinance',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Their cybersecurity solutions gave us peace of mind. We now have enterprise-level security without the enterprise-level complexity.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Director, InnovateLabs',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The team consulting services helped us restructure our organization for better productivity. Our team satisfaction scores improved by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'VP Marketing, GlobalTech',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'BusinessPro guided our global expansion perfectly. We successfully entered 3 new markets with their strategic planning and local expertise.',
      rating: 5
    },
    {
      name: 'James Miller',
      role: 'CTO, AppSolutions',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Their mobile solutions expertise helped us launch our app 2 months ahead of schedule. The user experience is exceptional.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience working with BusinessPro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 opacity-20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechStart</div>
            <div className="text-2xl font-bold text-gray-400">GrowthCorp</div>
            <div className="text-2xl font-bold text-gray-400">SecureFinance</div>
            <div className="text-2xl font-bold text-gray-400">InnovateLabs</div>
            <div className="text-2xl font-bold text-gray-400">GlobalTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;