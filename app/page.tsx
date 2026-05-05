import PostCard from '@/components/PostCard';

// 실제 구현 시에는 _posts 폴더에서 마크다운 파일을 읽어오는 함수를 사용합니다.
const dummyPosts = [
  { slug: 'seo-guide', title: '2026 SEO 전략 가이드', description: '검색 엔진 최적화의 모든 것...', date: '2026-05-01' },
  { slug: 'aeo-tips', title: 'AEO로 답변 가로채기', description: '질문형 검색에 대비하는 방법...', date: '2026-04-28' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to My Ad Blog</h1>
        <p className="text-xl text-gray-600">성공적인 광고 수익화를 위한 지식 저장소</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {dummyPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
