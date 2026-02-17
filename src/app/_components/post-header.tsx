import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 items-center gap-4">
        <Avatar name={author.name} picture={author.picture} />
        <span className="text-polystate-text-secondary">|</span>
        <div className="text-base text-polystate-text-secondary">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex md:hidden mb-6 items-center gap-4">
          <Avatar name={author.name} picture={author.picture} />
          <span className="text-polystate-text-secondary">|</span>
          <div className="text-base text-polystate-text-secondary">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
