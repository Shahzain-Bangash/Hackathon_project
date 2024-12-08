import React from 'react';

interface Product {
  name: string;
  code: string;
  price: string;
  imagePath?: string;
  anotherImage?: string;
}

interface ProductDisplayProps {
  products?: Product[]; // Make 'products' optional
}

// Sample products data
const sampleProducts: Product[] = [
  {
    name: 'Comfort Handy Craft',
    code: 'Y523',
    price: '$42.00',
    imagePath: '/image 1166.png',
    anotherImage: '/image2.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 1168.png',
    anotherImage: '/image3.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 15.png',
    anotherImage: '/image4.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 3.png',
    anotherImage: '/image5.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 32.png',
    anotherImage: '/image6.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 23.png',
    anotherImage: '/image 1170.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 23.png',
    anotherImage: '/image 31.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 23.png',
    anotherImage: '/image 1171.png',
  },
  {
    name: 'Another Product',
    code: 'ABC123',
    price: '$25.00',
    imagePath: '/image 23.png',
    anotherImage: '/image 32.png',
  },
];

const TrendingProducts: React.FC<ProductDisplayProps> = ({ products = sampleProducts }) => {
  return (
    <div>
      {/* Heading for Second Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold">Trending Products</h2>
      </div>

      {/* Second Section: Product Images (using anotherImage) */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(2,250px)] md:grid-cols-[repeat(3,250px)] lg:grid-cols-[repeat(4,210px)] gap-y-4 justify-center justify-items-center mx-auto w-full">
        {products.slice(5, 12).map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-md w-[200px]"
          >
            <img
              src={product.anotherImage || product.imagePath} // Fallback to imagePath if anotherImage is not available
              alt={product.name}
              className="bg-[#F5F6F8] w-[160px] h-[190px] rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Third Section: Custom Layout */}
      <div className="grid grid-rows-2 md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(3,1fr)] grid-cols-1 w-[85%] mx-auto gap-4 mt-8">
        {/* First Image - Spanning 2 rows */}
        <img
          src="Group_ok.png"
          alt=""
          className="row-span-2 md:col-span-1"
          style={{ width: '100%', maxWidth: '600px' }}
        />

        {/* Second Image - Spanning 2 rows */}
        <img
          src="Group 155.png"
          alt=""
          className="row-span-2 md:col-span-1"
          style={{ width: '100%', maxWidth: '600px' }}
        />

        {/* Last Column */}
        <div className="grid grid-rows-2 md:row-span-2 md:col-span-1 gap-4">
          <img
            src="Trnding products list (2).png"
            alt=""
            className="row-span-1 mt-4 md:mt-8"
          />
          <div className="grid grid-cols-2 gap-4">
            <img src="Trnding products list (1).png" alt="" className="col-span-1" />
            <img src="Trnding products list.png" alt="" className="col-span-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;

