import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Navy Blazer",
    image: "/assets/generated/item-blazer.dim_600x600.jpg",
    price: "₹8,000",
    description: "Timeless wool blend, slim fit",
    tag: "The Foundation",
  },
  {
    id: 2,
    name: "White Oxford Shirt",
    image: "/assets/generated/item-shirt.dim_600x600.jpg",
    price: "₹2,000",
    description: "Crisp cotton, perfect collar",
    tag: "The Classic",
  },
  {
    id: 3,
    name: "Beige Chinos",
    image: "/assets/generated/item-chinos.dim_600x600.jpg",
    price: "₹3,000",
    description: "Slim cut, all-season fabric",
    tag: "The Anchor",
  },
  {
    id: 4,
    name: "Brown Loafers",
    image: "/assets/generated/item-loafers.dim_600x600.jpg",
    price: "₹4,000",
    description: "Full-grain leather, polished finish",
    tag: "The Signature",
  },
];

export default function CatalogSection() {
  return (
    <section id="catalog" className="py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Sample Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            The Office Old Money Pack
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-serif text-xl text-navy/60 max-w-xl mx-auto">
            Complete look for ₹17,000 — look effortlessly elite
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              data-ocid={`catalog.item.${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-cream border border-beige-dark hover:border-gold/40 transition-all duration-400 hover:shadow-elegant overflow-hidden"
            >
              {/* Product image */}
              <div className="aspect-square overflow-hidden bg-beige relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-navy/90 px-2.5 py-1">
                  <span className="text-cream text-xs font-semibold tracking-wider uppercase">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-navy mb-1">
                  {product.name}
                </h3>
                <p className="font-serif text-navy/60 text-sm mb-3">
                  {product.description}
                </p>
                <p
                  className="font-display text-2xl font-bold"
                  style={{ color: "oklch(0.72 0.12 68)" }}
                >
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-beige-dark pt-10"
        >
          <div>
            <p className="text-navy/60 font-semibold tracking-wide uppercase text-sm mb-1">
              Complete Pack
            </p>
            <p className="font-display text-4xl font-bold text-navy">
              ₹17,000{" "}
              <span
                className="text-xl font-normal font-serif"
                style={{ color: "oklch(0.72 0.12 68)" }}
              >
                total
              </span>
            </p>
          </div>
          <Button
            data-ocid="catalog.primary_button"
            size="lg"
            className="bg-navy text-cream hover:bg-navy/90 font-semibold px-8 py-6 rounded-sm tracking-wide text-base flex items-center gap-2"
          >
            Buy on Myntra
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
