import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 mb-10 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* 블로그 로고/이름 */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
          My Ad Blog
        </Link>
        
        {/* 네비게이션 메뉴 */}
        <nav className="space-x-6 text-sm font-medium text-gray-600">
          <Link href="/posts" className="hover:text-blue-600">모든 글</Link>
          <Link href="/about" className="hover:text-blue-600">소개</Link>
        </nav>
      </div>
    </header>
  );
}
