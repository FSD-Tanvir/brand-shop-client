const AddProduct = () => {
  return (
    <div className="py-10">
      <div className="p-10   border-error border-4 rounded-3xl space-y-5 ">
        <h1 className="text-center text-5xl font-semibold text-error">
          Add Product
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-5">
            {/* name field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200  rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* Image field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* Brand  field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="brand "
                  className="block text-sm font-semibold text-gray-800"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* Type field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="type "
                  className="block text-sm font-semibold text-gray-800"
                >
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Type "
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* Price field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Price
                </label>
                <input
                  type="name"
                  name="price"
                  placeholder="Price"
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            {/* Rating field */}
            <div className="form-control">
              <div className="mb-2">
                <label
                  htmlFor="Rating"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Rating
                </label>
                <input
                  type="name"
                  name="Rating"
                  placeholder="Rating"
                  className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
          </div>
          {/* Short description field */}
          <div className="form-control">
            <div className="mb-2 my-5">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-800"
              >
                Short description
              </label>

              <textarea
                name="description"
                rows={4}
                cols={40}
                className="block w-full px-4 py-2 mt-2 text-error bg-white border border-red-200 rounded-md focus:border-error focus:ring-error focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="btn btn-error btn-outline">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
