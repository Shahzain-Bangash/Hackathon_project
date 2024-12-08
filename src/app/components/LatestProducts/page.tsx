import React from 'react';

// Define interfaces
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

// LatestProducts Component
const LatestProducts: React.FC<ProductDisplayProps> = ({ products = sampleProducts }) => {
  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#1A0B5B] mb-8">
          Latest Products
        </h2>
        <nav>
          <ul className='flex justify-center gap-x-7 my-6 customsm:text-[12px]'>
            <li>New Arrival</li>
            <li>Best Seller</li>
            <li>Featured</li>
            <li>Special Offer</li>
          </ul>
        </nav>

        {/* First Section: Product Images */}
        <div className="grid grid-cols-1 md:grid-rows-2 pb-6  sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(3,250px)] gap-4 justify-center justify-items-center mx-auto w-full">
          {products.length > 0 ? (
            products.slice(0, 6).map((product, index) => (
              <div
                key={product.code || index}
                className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300 mx-auto w-full max-w-[300px]"
              >
                <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg ">
                  <img
                    src={product.imagePath} // Use imagePath for this section
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="mt-4 text-center flex justify-between">
                  <h3 className=" text-[12px] font-semibold text-gray-800">{product.name}</h3>
                  <p className=" text-[12px] text-gray-500">{product.code}</p>
                  <p className=" text-[12px] font-bold text-gray-800 ">{product.price}</p>
                </div>
              </div>
            ))
          ) : (
          <div className="col-span-full text-center text-gray-500">
              No products available.
            </div>
          )}
        </div>
        {/* Shopex Offers Section */}
      <div
        className="relative"
        style={{
          padding: '40px 20px',
          backgroundColor: '#f0f4f8',
          width: '100%',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">
          What Shopex Offers!
        </h2>

        {/* Offers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Offer 1 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="free-delivery 1.png"
                alt="Offer 1"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Massa purus gravida.</p>
            
          </div>

          {/* Offer 2 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="cashback 1.png"
                alt="Offer 2"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Massa purus gravida.</p>
          </div>

          {/* Offer 3 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="Group.png"
                alt="Offer 3"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit am
        consectetur adipiscing e
        Massa purus gravida.</p>
          
          </div>

          {/* Offer 4 */}
          <div
            className="bg-white border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
            }}
          >
            <div className="mb-2">
              <img
                src="24-hours-support 1.png"
                alt="Offer 4"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, 
                onsectetur adipiscing elit.
                 Massa purus gravida.</p>
            
          </div>
        </div>
      </div>
  
    </div>
</div>
  );
};

export default LatestProducts;
