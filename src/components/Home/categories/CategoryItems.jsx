 

const CategoryItems = ({index , category}) => {

    const gradients =[
        "from-pink-200 to-blue-200",
        "from-blue-200 to-purple-200",
        "from-purple-200 to-pink-200",
        "from-pink-200 to-blue-200",
        
    ]
    return (
        <div className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transsition-shadow duration-30 cursor-pointer bg-gradient-to-br ${gradients[index % gradients.length]}`}>

            <div className='p-6  flex flex-col h-full'>
                <div className='flex justify-between items-start mb-4'>
                    <div className='h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl'>
                        {category.name.charAt(0)}

                    </div>
                    <span className='text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full '>
                        {category.product_count} Items

                    </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>{category.name}</h3>
                <p className='text-gray-500 text-sm mb-4 flex-grow'>{category.description}</p>
                <button className='text-pink-500 font-bold hover:text-pink-600 transition-colors flex items-center'>Explore</button>
            </div>
        </div>
    );
};

export default CategoryItems;