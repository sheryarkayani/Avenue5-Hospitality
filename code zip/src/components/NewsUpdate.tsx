import Image from "next/image";

const newsItems = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Lorem ipsum dolor sit",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Lorem ipsum dolor sit",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Lorem ipsum dolor sit",
    description: "consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
  },
];

export default function NewsUpdates() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-[#c8a45d]">NEWS</span>
        <span className="text-black">/UPDATES</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}