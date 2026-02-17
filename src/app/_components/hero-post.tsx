import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 md:mb-10">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-polystate-blue bg-polystate-light-blue/30 px-3 py-1 rounded-full mb-4">
            Featured
          </span>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight font-bold text-polystate-dark">
            <Link
              href={`/posts/${slug}`}
              className="hover:text-polystate-blue transition-colors"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-base text-polystate-text-secondary">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-polystate-text-secondary">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <Avatar name={author.name} picture={author.picture} />
            <Link
              href={`/posts/${slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-polystate-blue hover:bg-polystate-dark px-5 py-2.5 rounded-full transition-colors"
            >
              Read article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
