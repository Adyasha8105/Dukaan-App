import PrivacyImage from "../images/privacy.svg";
import TermsConditionsImage from "../images/terms-conditions.svg";
import DomainNameImage from "../images/domain-name.svg";
import InvoiceImage from "../images/invoice.svg";

const productsObj = [
  {
    title: "Privacy Policy Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    image: PrivacyImage,
  },
  {
    title: "Terms & Conditions Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    image: TermsConditionsImage,
  },
  {
    title: "Domain Name Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    image: DomainNameImage,
  },
  {
    title: "Invoice Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
    image: InvoiceImage,
  },
];

const OtherProducts = () => {
  return (
    <div className="px-4 py-12">
      <div className="w-[min(1024px,_100%)] mx-auto p-4 flex flex-col items-stretch justify-start gap-8">
        <h2 className="flex font-Galano-Semibold text-3xl justify-center sm:justify-center lg:justify-start">Try our other free products</h2>
        <div className="grid grid-rows-none place-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productsObj.map((product) => (
            <div className="max-w-[300px] flex flex-col items-start justify-start gap-1" key={product.title}>
              <img src={product.image} alt="logo" />
              <p className="font-Galano-Medium text-lg mt-2">{product.title}</p>
              <p className="text-[hsl(0,_0%,_30%)]">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
