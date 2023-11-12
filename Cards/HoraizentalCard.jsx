const MenuCards = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <figure>
        <img
          className="w-[118px] h-[108px] rounded-e-full rounded-b-full"
          src="https://img.freepik.com/free-photo/stain-mixed-paint_23-2147763666.jpg?w=1380&t=st=1699765612~exp=1699766212~hmac=b91f0e0636f38cf9d62cc93bb4d1bd35f41b403070476ae6ecbf49ef953c53ef"
          alt=""
        />
      </figure>
      <div className="lg:ms-6 space-y-2">
        <h3 className="text-xl">Product Name------------------</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
          distinctio.
        </p>
      </div>
      <div>
        <p className="text-[#BB8506]">$100</p>
      </div>
    </div>
  );
};

export default MenuCards;
