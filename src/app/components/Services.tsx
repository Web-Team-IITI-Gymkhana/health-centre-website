"use client";
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import ServiceCard from './ServiceCard';
import { useRouter } from 'next/navigation';

const Services = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isAdmin = (email: string) => {
    const adminEmail = 'chandakashmi004@gmail.com';
    return email === adminEmail;
  };

  const isIITIDomain = (email: string) => {
    return email.endsWith('@iiti.ac.in');
  };

  const handleHealthRecordClick = () => {
    if (session && session.user.email) {
      if (isIITIDomain(session.user.email)) {
        router.push('/student_details'); // Directly navigate to student_details page
      } else {
        router.push('/login'); // Navigate to login page if not from @iiti.ac.in domain
      }
    } else {
      router.push('/login'); // Navigate to login page if not logged in
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div id="services" className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/updates" legacyBehavior>
          <a className="md:col-span-1">
            <ServiceCard icon="/calen.jpg" title="Updates & Upcomings" />
          </a>
        </Link>
        <Link href="/Staff" legacyBehavior>
          <a className="md:col-span-1">
            <ServiceCard icon="/doc.jpg" title="Doctors & Nurses" />
          </a>
        </Link>
        <Link href="/buses" legacyBehavior>
          <a className="md:col-span-1">
            <ServiceCard icon="/busf.jpg" title="Buses & EV timings" />
          </a>
        </Link>
        <Link href="/doctor_availabilty" legacyBehavior>
          <a className="md:col-span-1">
            <ServiceCard icon="/nursef.jpg" title="Doctor Availability" />
          </a>
        </Link>
        <div className="cursor-pointer md:col-span-1" onClick={handleHealthRecordClick}>
          <ServiceCard icon="/searchf.jpg" title="Your Health Record" />
        </div>
      </div>
    </div>
  );
};

export default Services;
