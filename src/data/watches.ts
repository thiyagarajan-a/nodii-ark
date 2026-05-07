export type Watch = {
  id: string;
  name: string;
  subtitle: string;
  edition: string;
  price: string;
  story: string;
  movement: string;
  caseMaterial: string;
  caseDiameter: string;
  thickness: string;
  lugToLug: string;
  crystal: string;
  dial: string;
  waterResistance: string;
  strap: string;
  clasp: string;
  caseback: string;
  palette: { name: string; hex: string }[];
  accent: string;
  dialColor: string;
  caseColor: string;
};

export const watches: Watch[] = [
  {
    id: "tanjore-radiant",
    name: "Tanjore Temple Radiant",
    subtitle: "Sacred Geometry · Fan-Like Symmetry",
    edition: "Limited Edition 500",
    price: "₹74,000 – ₹82,000",
    story:
      "The emerald-green sunburst dial radiates from the center like temple rays at dawn, framed by a stepped architectural border reminiscent of temple prakaras. A tribute to Indian heritage, crafted for the connoisseur of culture, precision, and enduring legacy.",
    movement: "Automatic Movement, 24 Jewels",
    caseMaterial: "316L Stainless Steel, Rose Gold PVD",
    caseDiameter: "40.5 mm",
    thickness: "11.6 mm",
    lugToLug: "48.5 mm",
    crystal: "Sapphire Crystal, AR Coated",
    dial: "Emerald Green Sunburst with Gold Accents",
    waterResistance: "100 Meters / 10 ATM",
    strap: "Genuine Leather, Black Alligator Pattern",
    clasp: "Rose Gold PVD Tang Buckle",
    caseback: "Exhibition Caseback with Engraved Rotor",
    palette: [
      { name: "Rose Gold PVD", hex: "#b87357" },
      { name: "Emerald Green", hex: "#0b6d4f" },
      { name: "Antique Gold", hex: "#c9a24a" },
      { name: "Black Onyx", hex: "#0a0a0c" },
      { name: "Ivory Cream", hex: "#ece4d2" },
      { name: "Leather Brown", hex: "#3a2a14" },
    ],
    accent: "#0b6d4f",
    dialColor: "#0b6d4f",
    caseColor: "#b87357",
  },
  {
    id: "tanjore-small-seconds",
    name: "Tanjore Temple Small Seconds",
    subtitle: "Sculpted Gopuram · Applied Artistry",
    edition: "Limited Edition 500",
    price: "₹79,000",
    story:
      "The sculpted temple towers rise with symmetry and strength on a rich emerald dial, a tribute to South India's spiritual devotion and master craftsmanship. Every detail is a celebration of culture, precision, and enduring legacy.",
    movement: "Automatic, 24 Jewels, 28,800 VPH",
    caseMaterial: "316L Stainless Steel, Rose Gold PVD",
    caseDiameter: "42.00 mm",
    thickness: "12.00 mm",
    lugToLug: "48.50 mm",
    crystal: "Sapphire Crystal, AR Coated",
    dial: "Emerald Green Sunray with Applied Indices",
    waterResistance: "100 Meters / 10 ATM",
    strap: "Genuine Leather, Black Alligator Pattern",
    clasp: "Rose Gold PVD Tang Buckle",
    caseback: "Exhibition Caseback with Engraved Rotor",
    palette: [
      { name: "Rose Gold PVD", hex: "#b87357" },
      { name: "Emerald Green", hex: "#0b6d4f" },
      { name: "Antique Gold", hex: "#c9a24a" },
      { name: "Black Onyx", hex: "#0a0a0c" },
    ],
    accent: "#0b6d4f",
    dialColor: "#0b6d4f",
    caseColor: "#b87357",
  },
  {
    id: "native-american-luxury",
    name: "Native American Luxury",
    subtitle: "Floral Symmetry · Gemstone Accents",
    edition: "Limited Edition 500",
    price: "$250 – $300",
    story:
      "A celebration of Native American heritage and artisanal artistry. Intricate floral and gemstone motifs surround a tourbillon window — symbolizing harmony, protection, and timeless craftsmanship.",
    movement: "Seiko NH38A Automatic, 24 Jewels, 41 Hours Reserve",
    caseMaterial: "316L Stainless Steel, Gold PVD Coating",
    caseDiameter: "42.0 mm",
    thickness: "12.6 mm",
    lugToLug: "49.0 mm",
    crystal: "Sapphire Crystal, AR Coated",
    dial: "Multi-layer with applied indices, gemstone accents, open-heart tourbillon",
    waterResistance: "100 Meters / 10 ATM",
    strap: "Genuine Leather, Quick Release",
    clasp: "Gold PVD Tang Buckle",
    caseback: "Screw Down Exhibition",
    palette: [
      { name: "Gold PVD", hex: "#D4AF37" },
      { name: "Onyx Black", hex: "#0C0C0C" },
      { name: "Emerald Green", hex: "#0BB0B8" },
      { name: "Ruby Red", hex: "#B22222" },
      { name: "Sapphire Blue", hex: "#1E4FA1" },
    ],
    accent: "#D4AF37",
    dialColor: "#0C0C0C",
    caseColor: "#D4AF37",
  },
  {
    id: "keezhadi-field",
    name: "Keezhadi Field Automatic",
    subtitle: "Pottery Motifs · Tamil Symbols",
    edition: "Limited Edition 500",
    price: "$250 – $300",
    story:
      "Inspired by Keezhadi — the ancient Tamil civilisation that thrived more than 2600 years ago. The dial motif is derived from pottery patterns and Tamil heritage symbols.",
    movement: "Seiko NH35A Automatic, 24 Jewels, 41 Hours Reserve",
    caseMaterial: "316L Stainless Steel, Brushed Bronze PVD",
    caseDiameter: "42.0 mm",
    thickness: "12.6 mm",
    lugToLug: "49.0 mm",
    crystal: "Sapphire Crystal, AR Coated",
    dial: "Multi-layer texture with applied indices",
    waterResistance: "100 Meters / 10 ATM",
    strap: "Genuine Leather, Quick Release",
    clasp: "Bronze PVD Tang Buckle",
    caseback: "Screw Down Exhibition",
    palette: [
      { name: "Brushed Bronze", hex: "#8D8A4E" },
      { name: "Charcoal Black", hex: "#0E6B6B" },
      { name: "Turquoise Patina", hex: "#7A4E2E" },
      { name: "Saddle Brown", hex: "#2B2B2B" },
      { name: "Sand Beige", hex: "#C8B79A" },
    ],
    accent: "#7A4E2E",
    dialColor: "#2B2B2B",
    caseColor: "#8D8A4E",
  },
  {
    id: "native-american-teal",
    name: "Native American Luxury — Teal",
    subtitle: "Tribal Patterns · Natural Textures",
    edition: "Limited Edition 500",
    price: "$250 – $300",
    story:
      "A celebration of Native American heritage. Intricate tribal patterns meet refined luxury in perfect harmony. Bold geometric patterns, natural textures & earthy colours come together to create a design that is both timeless & meaningful.",
    movement: "Seiko NH35A Automatic, 24 Jewels, 41 Hours Reserve",
    caseMaterial: "316L Stainless Steel, Brushed Bronze PVD",
    caseDiameter: "42.0 mm",
    thickness: "12.6 mm",
    lugToLug: "49.0 mm",
    crystal: "Sapphire Crystal, AR Coated",
    dial: "Sunburst Teal with Applied Indices",
    waterResistance: "100 Meters / 10 ATM",
    strap: "Genuine Leather, Quick Release",
    clasp: "Bronze PVD Tang Buckle",
    caseback: "Screw Down Exhibition",
    palette: [
      { name: "Brushed Bronze", hex: "#8D8A4E" },
      { name: "Teal Sunburst", hex: "#0C686E" },
      { name: "Turquoise", hex: "#222E2E" },
      { name: "Saddle Brown", hex: "#B55E2A" },
      { name: "Sand Beige", hex: "#0DC2A5" },
    ],
    accent: "#0C686E",
    dialColor: "#0C686E",
    caseColor: "#8D8A4E",
  },
];
