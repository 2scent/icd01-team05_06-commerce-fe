import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadCrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadCrumbProps) => {
  return (
    <nav className="mb-4 text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
