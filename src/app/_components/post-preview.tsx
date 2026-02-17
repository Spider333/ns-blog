import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="group rounded-2xl border border-polystate-border bg-white overflow-hidden hover:shadow-lg hover:border-polystate-light-blue transition-all duration-300">
      <div className="overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="p-6">
        <div className="text-sm mb-3 text-polystate-text-secondary font-medium">
          <DateFormatter dateString={date} />
        </div>
        <h3 className="text-2xl mb-3 leading-snug font-bold text-polystate-dark">
          <Link
            href={`/posts/${slug}`}
            className="hover:text-polystate-blue transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base leading-relaxed mb-5 text-polystate-text-secondary line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-polystate-border">
          <Avatar name={author.name} picture={author.picture} />
          <Link
            href={`/posts/${slug}`}
            className="text-sm font-semibold text-polystate-blue hover:text-polystate-dark transition-colors inline-flex items-center gap-1"
          >
            Read more
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
