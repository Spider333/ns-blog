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
    <div className="rounded-xl border border-polystate-border dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="p-6">
        <h3 className="text-3xl mb-3 leading-snug font-semibold text-polystate-text dark:text-slate-200">
          <Link
            href={`/posts/${slug}`}
            className="hover:text-polystate-blue dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
        </h3>
        <div className="text-sm mb-4 text-polystate-text-secondary">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-base leading-relaxed mb-4 text-polystate-text dark:text-slate-300">
          {excerpt}
        </p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  );
}
