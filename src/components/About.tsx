import React from 'react';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Mission-Driven',
      description: 'We are committed to helping businesses achieve their goals through innovative solutions.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, delivering exceptional results.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We build lasting partnerships based on trust and results.'
    }
  ];

  const achievements = [
    'Over 500 successful projects completed',
    '98% client satisfaction rate',
    'Award-winning team of experts',
    '24/7 dedicated customer support',
    'Proven track record of growth',
    'Industry-leading security standards'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About BusinessPro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over a decade, we've been at the forefront of business transformation,
                helping companies of all sizes achieve unprecedented growth and success. Our
                team of seasoned professionals brings together expertise from various industries
                to deliver comprehensive solutions tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every business has the potential to thrive. Our mission is to
                unlock that potential through innovative strategies, cutting-edge technology,
                and unwavering commitment to excellence.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 mb-3 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our team at work"
              className="rounded-2xl shadow-xl w-full h-[600px] object-cover"
            />
            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-500">50+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;