import Link from "next/link";

interface FeatureProps {
  title: string;
  desc: string;
  url: string;
  icon: string;
  bg: string;
}

interface CTACardProps {
  feature: FeatureProps;
  color: string;
}

const CTACard = (props: CTACardProps) => {
  const { feature, color } = props;

  return (
    <div className="px-0 py-4 w-full sm:px-2 md:px-4 sm:py-2 md:py-4 lg:py-0 sm:w-1/2 lg:w-1/3">
      <Link href={feature.url} passHref>
        <div
          className={`bg-white rounded-2xl shadow-xl cursor-pointer transform hover:-translate-y-4 hover:bg-${color}-400 hover:text-white`}
        >
          <img
            src={`/images/${feature.bg}`}
            className="h-48 w-full rounded-2xl object-cover"
            alt="Background Image"
          />
          <div className="absolute w-full -mt-10 flex justify-center">
            <img
              src={`/images/icons/${feature.icon}`}
              className={`inset-x-auto p-1 border-4 border-${color}-400 h-20 w-20 bg-white rounded-full`}
              alt="Icon Fitur"
            />
          </div>
          <div className="text-center pt-16 pb-10">
            <h4 className="text-2xl font-bold">{feature.title}</h4>
            <p className="mt-1 text-base">{feature.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CTACard;
