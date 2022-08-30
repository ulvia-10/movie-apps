import Image from 'next/image'
const Contact = () => {
  return (
    <div>
            <div className="flex flex-col">
        <h1 className="font-extrabold mt-20 text-2xl text-center">
          CONTACT US
        </h1>
      </div>
      <div className="float-left ml-20 items-center h-full"> <Image src="/call.jpg" width={600} height={600}/> </div>
      <div className="float-right mr-[30%] mt-20">
        <div className='h-[400px] w-[400px] bg-gradient-to-r from-sky-900 to-sky-100 rounded-sm shadow-sm'></div>
      </div>
    </div>
  );
};

export default Contact;
