import Image from 'next/image';
import Link from 'next/link';

// 마크다운 요소들을 커스텀 태그로 매핑
export const MDXComponents = {
  // 마크다운의 링크 [텍스트](주소) 처리
  a: ({ href, children }: any) => {
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternalLink) {
      return <Link href={href} className="text-blue-600 underline">{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{children}</a>;
  },
  
  // 마크다운의 이미지 ![설명](주소) 처리 - Next.js 이미지 최적화 적용
  img: ({ src, alt }: any) => (
    <div className="relative w-full h-auto my-8 rounded-lg overflow-hidden">
      <Image 
        src={src} 
        alt={alt || 'Blog image'} 
        width={800} 
        height={400} 
        className="object-cover"
        layout="responsive"
      />
    </div>
  )
};
