import Link from 'next/link';

interface FeatureProps {
  title: string;
  url: string;
  color: string;
}

interface CTACardProps {
  feature: FeatureProps;
}

const CTACard = (props: CTACardProps) => {
  const { feature } = props;

  return (
    <div className="px-0 py-2 w-full sm:px-2 md:px-2 md:py-2 lg:py-0 sm:w-1/2 lg:w-1/3">
      <Link href={feature.url}>
        <a>
          <div
            className={`p-4 rounded-full bg-black cursor-pointer hover:shadow-xl`}
          >
            <h4 className="text-lg text-white font-medium text-center md:text-xl">
              {feature.title}
            </h4>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CTACard;
