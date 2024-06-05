import { Metadata } from "next";
import PostsSection from "./_components/posts-section";
import CategoriesSection from "./_components/categories-section";
import AuthorSection from "@/components/author-section";

export const metadata: Metadata = {
  title: "مدونتي: اكتشف مواضيع متنوعة ومفيدة",
  description:
    "مرحبًا بك في مدونتي! اكتشف معنا مقالات شيقة ومعلومات قيمة في مجموعة متنوعة من المواضيع، بما في ذلك السفر والثقافة والتقنية والطعام وغيرها، مما يسهم في إثراء معرفتك وتوسيع آفاقك.",
};

export default function Home() {
  return (
    <>
      {/* main section */}
      <section className="flex flex-col items-center justify-center gap-6 md:gap-8 text-center p-4 pt-8 md:p-8 md:pt-12">
        <h1 className="text-2xl md:text-4xl font-semibold">
          مرحبا بك في مدونتي 👋
        </h1>
        <p className="max-w-[40rem] text-lg">
          اكتشف عالمًا جديدًا معي: استمتع بجولة ملهمة في مدونتي، حيث تنتظرك قصص
          شيقة،ومعلومات قيمة، ونصائح ذهبية، وتجارب لا تُنسى تغمرك بسحر الاستكشاف
          وتعزز شغفك بالسفر والتجربة.
        </p>
      </section>
      <div className="grid md:grid-cols-5 gap-8 md:gap-16">
        <div className="md:col-span-3">
          <PostsSection />
        </div>
        <div className="md:col-span-2 space-y-8">
          <CategoriesSection />
          <AuthorSection />
        </div>
      </div>
    </>
  );
}
