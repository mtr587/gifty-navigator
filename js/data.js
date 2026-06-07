// Gifty Navigator - Gift Data & Research
const GIFT_DATA = {

  // Hero headline stats
  stats: [
    { number: "$979B", label: "2024 Winter Holiday Spending" },
    { number: "$15B", label: "Unused Gift Cards Each Year" },
    { number: "45%", label: "Gifts Returned or Re-gifted" },
    { number: "Cash", label: "#1 Most Wanted Gift (All Occasions)" }
  ],

  // All occasions with metadata
  occasions: [
    { id: "christmas", emoji: "🎄", name: "Christmas", spend: "$800-1,000", spendLabel: "per gifter", color: "#c0392b", season: "winter", slug: "christmas" },
    { id: "valentines-day", emoji: "💝", name: "Valentine's Day", spend: "$186", spendLabel: "per person", color: "#e74c3c", season: "winter", slug: "valentines-day" },
    { id: "mothers-day", emoji: "🌸", name: "Mother's Day", spend: "$254", spendLabel: "per person", color: "#e84393", season: "spring", slug: "mothers-day" },
    { id: "fathers-day", emoji: "👔", name: "Father's Day", spend: "$196", spendLabel: "per person", color: "#2d6a9f", season: "summer", slug: "fathers-day" },
    { id: "birthday", emoji: "🎂", name: "Birthday", spend: "$30-300", spendLabel: "varies by relation", color: "#f39c12", season: "year-round", slug: "birthday" },
    { id: "wedding", emoji: "💒", name: "Wedding", spend: "$50-200", spendLabel: "per guest", color: "#9b59b6", season: "year-round", slug: "wedding" },
    { id: "baby-shower", emoji: "👶", name: "Baby Shower", spend: "$30-150", spendLabel: "varies", color: "#1abc9c", season: "year-round", slug: "baby-shower" },
    { id: "housewarming", emoji: "🏠", name: "Housewarming", spend: "$20-50", spendLabel: "typical", color: "#e67e22", season: "year-round", slug: "housewarming" },
    { id: "graduation", emoji: "🎓", name: "Graduation", spend: "$25-200", spendLabel: "varies", color: "#2c3e50", season: "spring", slug: "graduation" },
    { id: "anniversary", emoji: "💍", name: "Anniversary", spend: "$50-300+", spendLabel: "varies", color: "#e91e63", season: "year-round", slug: "anniversary" },
    { id: "retirement", emoji: "🏖️", name: "Retirement", spend: "$30-200", spendLabel: "group gifts common", color: "#27ae60", season: "year-round", slug: "retirement" },
    { id: "thanksgiving", emoji: "🍂", name: "Thanksgiving Host", spend: "$15-35", spendLabel: "host gift", color: "#d35400", season: "fall", slug: "thanksgiving" },
    { id: "easter", emoji: "🐰", name: "Easter", spend: "$177", spendLabel: "per family", color: "#8e44ad", season: "spring", slug: "easter" },
    { id: "corporate", emoji: "🏢", name: "Office Gifts", spend: "$15-35", spendLabel: "Secret Santa", color: "#7f8c8d", season: "year-round", slug: "corporate-gifts" },
    { id: "just-because", emoji: "✨", name: "Just Because", spend: "$10-40", spendLabel: "thoughtful gesture", color: "#fdcb6e", season: "year-round", slug: "just-because" }
  ],

  // Detailed mismatch data per occasion
  mismatchData: {
    "christmas": {
      given: [
        { rank: 1, item: "Clothing & Accessories", pct: "52%", price: "$25-150" },
        { rank: 2, item: "Gift Cards", pct: "46%", price: "$25-100" },
        { rank: 3, item: "Toys", pct: "36%", price: "$15-80" },
        { rank: 4, item: "Books & Media", pct: "33%", price: "$10-50" },
        { rank: 5, item: "Personal Care / Beauty", pct: "28%", price: "$15-80" }
      ],
      wanted: [
        { rank: 1, item: "Cash", pct: "65-70%", price: "Any" },
        { rank: 2, item: "Gift Cards / Vouchers", pct: "55-60%", price: "$25-100" },
        { rank: 3, item: "Clothing (if it fits their style)", pct: "40-45%", price: "$25-150" },
        { rank: 4, item: "Electronics (AirPods, tablets)", pct: "35-40%", price: "$50-500+" },
        { rank: 5, item: "Experiences (concerts, travel, spa)", pct: "30-35%", price: "$50-500+" }
      ],
      insight: "Clothing is the most-given gift, but recipients only want it if it perfectly matches their personal style. Experiences and electronics are dramatically under-given relative to desire. Gift cards are the rare category where givers and receivers agree — they're the safe bet.",
      bestGifts: ["Gift Cards", "Experience Vouchers", "Quality Electronics", "Personalized Items"],
      avoidGifts: ["Random Home Decor", "Scented Candles (overdone)", "Generic Gift Baskets"]
    },
    "valentines-day": {
      given: [
        { rank: 1, item: "Candy / Chocolate", pct: "57%", price: "$28 avg" },
        { rank: 2, item: "Greeting Cards", pct: "41%", price: "$12 avg" },
        { rank: 3, item: "Flowers", pct: "39%", price: "$48 avg" },
        { rank: 4, item: "Evening Out / Dinner", pct: "34%", price: "$95 avg" },
        { rank: 5, item: "Jewelry", pct: "21%", price: "$140 avg" }
      ],
      wanted: [
        { rank: 1, item: "Experience: Weekend Getaway", pct: "Top Pick", price: "$200-800" },
        { rank: 2, item: "Romantic Dinner Out", pct: "Top Pick", price: "$80-200" },
        { rank: 3, item: "Jewelry (classic choice)", pct: "Top Pick", price: "$50-500+" },
        { rank: 4, item: "Personalized / Custom Gifts", pct: "Rising", price: "$30-150" },
        { rank: 5, item: "Spa / Wellness Package", pct: "Rising", price: "$60-200" }
      ],
      insight: "35% of recipients wish they received fewer sweets and more meaningful gifts. Stuffed animals are cute but adults consider them clutter. The 'evening out' is the one category both sides love — double down on experiences.",
      bestGifts: ["Dinner Reservations", "Jewelry", "Spa Day", "Personalized Photo Album", "Weekend Trip Planning"],
      avoidGifts: ["Giant Teddy Bears", "Generic Chocolate Boxes", "Last-Minute Gas Station Flowers"]
    },
    "mothers-day": {
      given: [
        { rank: 1, item: "Greeting Cards", pct: "75%", price: "$5-10" },
        { rank: 2, item: "Flowers", pct: "65%", price: "$30-60" },
        { rank: 3, item: "Special Outing / Brunch", pct: "58%", price: "$50-150" },
        { rank: 4, item: "Gift Cards", pct: "45%", price: "$25-100" },
        { rank: 5, item: "Clothing / Accessories", pct: "40%", price: "$30-100" }
      ],
      wanted: [
        { rank: 1, item: "A Day Off (seriously)", pct: "#1 Unofficially", price: "Priceless" },
        { rank: 2, item: "Spa Day / Massage", pct: "Top Pick", price: "$80-200" },
        { rank: 3, item: "Handmade Gifts from Kids", pct: "Sentimental Favorite", price: "Free" },
        { rank: 4, item: "Birthstone Jewelry", pct: "Popular", price: "$50-300" },
        { rank: 5, item: "House Cleaning Service", pct: "Underrated", price: "$100-200" }
      ],
      insight: "Never buy kitchen appliances or cleaning tools unless she explicitly asked — moms read it as 'you should do more housework.' Handmade items from children + a spa day = the perfect combination. Flowers are lovely but not enough on their own.",
      bestGifts: ["Spa / Massage Package", "Birthstone Jewelry", "House Cleaning Service", "Meal Delivery Subscription", "Handmade Card + Real Gift Combo"],
      avoidGifts: ["Kitchen Appliances", "Cleaning Supplies", "Just Flowers Alone", "Generic Bath Sets"]
    },
    "fathers-day": {
      given: [
        { rank: 1, item: "Greeting Cards", pct: "62%", price: "$5-10" },
        { rank: 2, item: "Special Outing", pct: "49%", price: "$50-150" },
        { rank: 3, item: "Clothing", pct: "43%", price: "$25-75" },
        { rank: 4, item: "Gift Cards", pct: "42%", price: "$25-100" },
        { rank: 5, item: "Electronics", pct: "24%", price: "$50-300" }
      ],
      wanted: [
        { rank: 1, item: "Sports / Event Tickets", pct: "Top Pick", price: "$50-500" },
        { rank: 2, item: "Electronics & Gadgets", pct: "Top Pick", price: "$50-500" },
        { rank: 3, item: "Gift Cards (Home Depot, Amazon)", pct: "Favorite", price: "$25-100" },
        { rank: 4, item: "Quality Food / Whiskey", pct: "Popular", price: "$30-150" },
        { rank: 5, item: "Hobby Gear (Grilling, Fishing)", pct: "Underrated", price: "$40-200" }
      ],
      insight: "Mother's Day spending consistently outpaces Father's Day by 25-35%. Stop buying ties and 'World's Best Dad' mugs — no one uses them. Dads want hobby-related gear and experiences. If he grills, get him a premium grilling tool, not another tie.",
      bestGifts: ["Sports/Concert Tickets", "Premium Hobby Gear", "Quality Whiskey Set", "Tech Gadgets", "Home Depot Gift Card"],
      avoidGifts: ["Neckties (the classic mistake)", "'#1 Dad' Mugs", "Generic Socks", "Cheap BBQ Sets"]
    },
    "birthday": {
      given: [
        { rank: 1, item: "Cash / Gift Cards", pct: "Common", price: "$20-100" },
        { rank: 2, item: "Clothing", pct: "Common", price: "$25-100" },
        { rank: 3, item: "Toys (for kids)", pct: "Common", price: "$15-80" },
        { rank: 4, item: "Alcohol / Dining", pct: "Adults", price: "$20-60" },
        { rank: 5, item: "Books / Hobby Items", pct: "Common", price: "$10-50" }
      ],
      wanted: [
        { rank: 1, item: "Cash (all age groups)", pct: "#1 Universal", price: "Any" },
        { rank: 2, item: "Experiences (adults 20-50)", pct: "Rising Fast", price: "$50-500" },
        { rank: 3, item: "Gift Cards for Favorite Stores", pct: "Popular", price: "$25-100" },
        { rank: 4, item: "Electronics / Tech Accessories", pct: "Popular", price: "$30-300" },
        { rank: 5, item: "Hobby-Specific Quality Items", pct: "Underrated", price: "$30-200" }
      ],
      insight: "Adults buying 'cool' clothes for teens → 95% get returned. Just give teens cash or gift cards. For people 30+, they likely have enough stuff — experiences and premium consumables win. The universal truth: cash is always welcome.",
      bestGifts: ["Cash / Gift Cards (always safe)", "Experience Vouchers (20-50 age group)", "High-End Consumables (30+)", "Hobby Equipment (ask first)", "Tech Accessories"],
      avoidGifts: ["Clothes for Teens", "Generic Bath Sets", "'Old People' Products for Seniors", "Cheap Novelty Items"]
    },
    "wedding": {
      given: [
        { rank: 1, item: "Cash / Check", pct: "60-70%", price: "$50-200" },
        { rank: 2, item: "Registry Items", pct: "Common", price: "$25-150" },
        { rank: 3, item: "Kitchen Appliances", pct: "Common", price: "$50-300" },
        { rank: 4, item: "Home Goods / Linens", pct: "Common", price: "$30-100" },
        { rank: 5, item: "Decorative Items", pct: "Some", price: "$25-75" }
      ],
      wanted: [
        { rank: 1, item: "Cash (always #1)", pct: "Top Pick", price: "Any" },
        { rank: 2, item: "Registry Items (they chose them!)", pct: "Top Pick", price: "$25-200" },
        { rank: 3, item: "Honeymoon Fund Contributions", pct: "Rising", price: "$50-200" },
        { rank: 4, item: "Experience Funds", pct: "New Trend", price: "$50-200" },
        { rank: 5, item: "Quality Cookware (from registry)", pct: "Appreciated", price: "$50-300" }
      ],
      insight: "The golden rule of wedding gifts: always buy from the registry. Couples spend hours picking those items. Cash is now 60-70% of all wedding gifts — it's what they really want. 'Cute but impractical' decorative items often end up in the back of a closet.",
      bestGifts: ["Cash (the universal winner)", "Registry Items (exactly what they want)", "Honeymoon Fund Contribution", "Quality Cookware from Registry", "Gift Card to Their Favorite Store"],
      avoidGifts: ["Random Home Decor (not on registry)", "'Cute' Impractical Items", "Surprise Artwork", "Duplicate Kitchen Gadgets"]
    },
    "baby-shower": {
      given: [
        { rank: 1, item: "Baby Clothes (0-3 months)", pct: "Most common", price: "$15-40" },
        { rank: 2, item: "Diapers & Wipes", pct: "Common", price: "$20-50" },
        { rank: 3, item: "Baby Blankets", pct: "Common", price: "$15-40" },
        { rank: 4, item: "Stuffed Animals", pct: "Common", price: "$10-30" },
        { rank: 5, item: "Baby Books", pct: "Common", price: "$5-15" }
      ],
      wanted: [
        { rank: 1, item: "Diapers (ALL sizes, not just newborn)", pct: "Most Needed", price: "$20-60" },
        { rank: 2, item: "Gift Cards (Amazon, Target, Meal Delivery)", pct: "Most Wanted", price: "$25-100" },
        { rank: 3, item: "Group Contributions to Big Items", pct: "Helpful", price: "$50-200" },
        { rank: 4, item: "Meal Delivery Service", pct: "Underrated", price: "$50-100" },
        { rank: 5, item: "Clothes in 6-12 month sizes", pct: "Needed", price: "$15-40" }
      ],
      insight: "Everyone buys 0-3 month clothes — the baby may never wear them all before outgrowing them. Parents receive 20 stuffed animals but only need 1-2. Meal delivery services and gift cards are the most underrated gifts for new parents.",
      bestGifts: ["Diapers (Size 2-4, not just newborn)", "Amazon / Target Gift Card", "Meal Delivery Subscription", "Group Contribution to Stroller / Car Seat", "6-12 Month Clothing"],
      avoidGifts: ["Newborn-Size Clothes (overdone)", "Stuffed Animals (they'll get 15+)", "Baby Shoes (babies don't walk)", "Fancy Newborn Outfits (impractical)"]
    },
    "housewarming": {
      given: [
        { rank: 1, item: "Plants / Flowers", pct: "Common", price: "$15-40" },
        { rank: 2, item: "Wine / Champagne", pct: "Common", price: "$15-40" },
        { rank: 3, item: "Candles", pct: "Common", price: "$10-25" },
        { rank: 4, item: "Kitchen Gadgets", pct: "Common", price: "$20-50" },
        { rank: 5, item: "Decorative Bowls / Trays", pct: "Common", price: "$15-40" }
      ],
      wanted: [
        { rank: 1, item: "Gift Cards (Target, Home Depot, Wayfair)", pct: "Most Wanted", price: "$25-100" },
        { rank: 2, item: "Practical Tools & Supplies", pct: "Needed", price: "$20-80" },
        { rank: 3, item: "Local Restaurant Gift Cards", pct: "Appreciated", price: "$25-50" },
        { rank: 4, item: "Quality Consumables (Wine, Olive Oil)", pct: "Safe", price: "$15-50" },
        { rank: 5, item: "Smart Home Devices", pct: "Rising", price: "$25-100" }
      ],
      insight: "Never buy decorative items before the new homeowners have established their style — it likely won't match. Plants die if they're not plant people. Gift cards to home improvement stores are the safest and most appreciated housewarming gift.",
      bestGifts: ["Home Improvement Gift Card", "Local Restaurant Gift Card", "Quality Wine / Champagne", "Smart Home Device", "Premium Consumables"],
      avoidGifts: ["Decorative Items (wrong style risk)", "Plants (if they don't garden)", "Scented Candles (not everyone's scent)", "Wall Art (too personal)"]
    },
    "graduation": {
      given: [
        { rank: 1, item: "Cash / Check", pct: "Most common", price: "$25-200" },
        { rank: 2, item: "Gift Cards", pct: "Common", price: "$25-100" },
        { rank: 3, item: "Tech (Laptop, Tablet)", pct: "Family", price: "$300-1,000+" },
        { rank: 4, item: "Books (Oh the Places You'll Go)", pct: "Classic", price: "$10-20" },
        { rank: 5, item: "Jewelry / Watch", pct: "Milestone", price: "$50-300" }
      ],
      wanted: [
        { rank: 1, item: "Cash (always #1)", pct: "Top Pick", price: "Any" },
        { rank: 2, item: "Technology (for college/work)", pct: "Top Pick", price: "$300-1,000+" },
        { rank: 3, item: "Travel / Experience", pct: "Rising", price: "$200-1,000" },
        { rank: 4, item: "Career-Related Items", pct: "Practical", price: "$50-200" },
        { rank: 5, item: "Dorm Supplies (HS → College)", pct: "Helpful", price: "$30-150" }
      ],
      insight: "Graduation has the least mismatch of any gift occasion — cash dominates and everyone's happy about it. Adding a small personal touch (a handwritten note about their achievement) alongside cash makes it memorable.",
      bestGifts: ["Cash", "New Laptop / Tech for College", "Travel Fund Contribution", "Professional Wardrobe Pieces", "Dorm Essentials Bundle"],
      avoidGifts: ["Cheap Inspirational Merchandise", "Generic Gift Sets", "Things That Won't Fit in a Dorm"]
    }
  },

  // Products for each occasion (Amazon Associates links go here)
  products: {
    "christmas": {
      under25: [
        { name: "Personalized Christmas Ornament", price: "$12.99", why: "Personalized items reduce the 'generic gift' problem — shows you thought about them specifically", emoji: "🎄" },
        { name: "Premium Hot Chocolate Gift Set", price: "$19.99", why: "Consumable gifts don't create clutter — guaranteed to be enjoyed and not returned", emoji: "☕" },
        { name: "Cozy Reading Socks (2-Pack)", price: "$14.99", why: "Practical comfort items have very low return rates — universally appreciated in winter", emoji: "🧦" }
      ],
      under50: [
        { name: "Bluetooth Beanie Headphone", price: "$29.99", why: "Tech + practical = the intersection of 'I want to buy something cool' and 'they'll actually use it'", emoji: "🎧" },
        { name: "Premium Candle Making Kit", price: "$34.99", why: "Experience-based gifts (making something) create memories, not clutter", emoji: "🕯️" },
        { name: "Personalized Family Recipe Book", price: "$39.99", why: "Sentimental + practical hits the sweet spot — shows deep thought without being useless", emoji: "📖" }
      ],
      under100: [
        { name: "Kindle Paperwhite", price: "$99.99", why: "Books are a top-5 given gift, and an e-reader makes the reading experience better — perfect match", emoji: "📱" },
        { name: "Premium Dutch Oven (6-QT)", price: "$79.99", why: "Kitchen items succeed when they're high-quality, not when they're cheap gadgets from gift sets", emoji: "🍲" }
      ]
    },
    "valentines-day": {
      under50: [
        { name: "Custom Star Map (Night We Met)", price: "$29.99", why: "Personalized gifts outperform generic chocolate 10:1 for romantic occasions", emoji: "⭐" },
        { name: "Couples Journal - 365 Days", price: "$24.99", why: "Experience + emotional connection > material items for romantic gifts", emoji: "📓" },
        { name: "Premium Chocolate Truffle Box (Handmade)", price: "$34.99", why: "Quality over quantity — one box of artisan chocolate beats 5 generic heart-shaped boxes", emoji: "🍫" }
      ],
      under100: [
        { name: "Date Night Cookbook + Apron Set", price: "$49.99", why: "Encourages shared experiences — exactly what recipients report wanting instead of more 'stuff'", emoji: "👩‍🍳" },
        { name: "Spa Gift Basket (Premium)", price: "$69.99", why: "Spa/wellness was a top-5 most-wanted Valentine's category, far more desired than stuffed animals", emoji: "🧖" }
      ]
    },
    "mothers-day": {
      under50: [
        { name: "Birthstone Necklace (Sterling Silver)", price: "$39.99", why: "Birthstone = personalized but tasteful. Jewelry is a top-3 most-wanted category for moms", emoji: "💎" },
        { name: "Personalized Recipe Cutting Board", price: "$29.99", why: "Handmade feel + practical kitchen use = avoids the 'just flowers' problem", emoji: "🔪" },
        { name: "Premium Tea & Honey Gift Set", price: "$24.99", why: "Consumable luxury — gets used up, no clutter, feels indulgent", emoji: "🍯" }
      ],
      under100: [
        { name: "Spa Gift Card + Robe Bundle", price: "$79.99", why: "'A day off' is the unofficial #1 most-wanted mother's day gift. Make it happen.", emoji: "🧖‍♀️" },
        { name: "Digital Photo Frame (WiFi)", price: "$89.99", why: "Moms (especially 50+) rank family photos above almost everything. A frame that auto-updates = ongoing joy", emoji: "🖼️" }
      ]
    },
    "fathers-day": {
      under50: [
        { name: "Premium BBQ Tool Set (Stainless)", price: "$39.99", why: "Hobby-specific gear beats generic ties 100% of the time. If he grills, this is gold", emoji: "🥩" },
        { name: "Whiskey Stone Set + Glasses", price: "$29.99", why: "Quality consumable accessories — feels premium, gets used, never returned", emoji: "🥃" },
        { name: "Leather Multi-Tool Keychain", price: "$24.99", why: "Practical + premium materials = the dad gift formula that works", emoji: "🔧" }
      ],
      under100: [
        { name: "Wireless Meat Thermometer (WiFi)", price: "$69.99", why: "Tech + hobby = the dad gift intersection. Upgrades something he already does", emoji: "🌡️" },
        { name: "Personalized Golf Balls + Towel Set", price: "$49.99", why: "Personalization shows effort. Golf gear is one of the most-requested dad gifts that's rarely given", emoji: "⛳" }
      ]
    },
    "birthday": {
      under25: [
        { name: "Funny Birthday Candle Set", price: "$12.99", why: "Small, consumable, funny — perfect add-on that doesn't feel cheap or generic", emoji: "🕯️" },
        { name: "Personalized Name Necklace", price: "$19.99", why: "For teens/20s: personalized accessories beat random clothing every single time", emoji: "📿" },
        { name: "Gourmet Snack Box (World Tour)", price: "$24.99", why: "Consumable experience — 12 countries of snacks, zero clutter, maximum novelty", emoji: "🌍" }
      ],
      under50: [
        { name: "Bluetooth Record Player (Mini)", price: "$39.99", why: "Nostalgia + tech = broad appeal across ages 20-60", emoji: "🎵" },
        { name: "DIY Hot Sauce Making Kit", price: "$29.99", why: "Experience gift that creates something usable — perfect for the 'has everything' person", emoji: "🌶️" }
      ],
      under100: [
        { name: "Weighted Blanket (Premium, 15 lbs)", price: "$59.99", why: "Wellness gifts are underrated for birthdays — practical luxury for the homebody", emoji: "😴" },
        { name: "Portrait Illustration (Custom Digital)", price: "$49.99", why: "Art is risky unless it's personalized to THEM. Custom illustration from their photo = perfect", emoji: "🎨" }
      ]
    },
    "wedding": {
      under100: [
        { name: "KitchenAid Stand Mixer Contribution", price: "From $79.99", why: "Registry items are guaranteed wins — they literally asked for these. KitchenAid is the #1 registry item", emoji: "🍳" },
        { name: "Personalized Cutting Board (Mr & Mrs)", price: "$39.99", why: "Add personalization to a practical item — they'll use it AND remember who gave it", emoji: "🪵" },
        { name: "Premium Wine Decanter Set", price: "$49.99", why: "Elegant, useful for entertaining, doesn't take up much space — ideal for couples in apartments", emoji: "🍷" }
      ]
    },
    "baby-shower": {
      under50: [
        { name: "Diaper Cake (Size 2, Premium)", price: "$39.99", why: "Diapers are the #1 most-needed item. Size 2 specifically — everyone buys newborn size", emoji: "🧷" },
        { name: "Baby Memory Book (Gender Neutral)", price: "$24.99", why: "Sentimental gifts work when they enable the parent to create memories, not when they're just decorative", emoji: "📚" },
        { name: "Meal Delivery Gift Card", price: "$30-50", why: "New parents consistently rate meal delivery as the most underrated gift. More useful than 3 more onesies", emoji: "🍲" }
      ]
    },
    "housewarming": {
      under50: [
        { name: "Smart LED Light Bulbs (4-Pack)", price: "$29.99", why: "Smart home = universally appreciated upgrade. Practical but exciting. No style mismatch risk", emoji: "💡" },
        { name: "Premium Olive Oil & Balsamic Set", price: "$34.99", why: "Consumable luxury — no style clash, no space issues, gets used and enjoyed", emoji: "🫒" },
        { name: "Ring Video Doorbell (Basic)", price: "$49.99", why: "Security + smart home = high perceived value, no aesthetic risk, genuinely useful for new homeowners", emoji: "🔔" }
      ]
    },
    "graduation": {
      under50: [
        { name: "Personalized Leather Journal", price: "$29.99", why: "Professional + personal — bridges the gap between 'congrats' and 'here's something for your career'", emoji: "📔" },
        { name: "Portable Charger (20,000 mAh)", price: "$39.99", why: "Practical tech accessories are the sweet spot — useful daily, shows you thought about their real life", emoji: "🔋" },
        { name: "Noise-Cancelling Earbuds", price: "$49.99", why: "Perfect for the college-bound: study sessions, gym, commute. Universal utility", emoji: "🎧" }
      ]
    }
  },

  // Age-specific birthday insights
  ageGroups: [
    {
      age: "Kids (0-12)",
      emoji: "👶",
      given: "Toys (LEGO, action figures), STEM kits, video games, Roblox/V-Bucks gift cards",
      wanted: "Screen time, themed experiences, trending toys (Squishmallows, Pokémon cards, Nintendo Switch games)",
      insight: "Adults buy what THEY played with as kids. Kids want what's trending NOW. Ask their parents what they're currently into.",
      avgSpend: "$30-80"
    },
    {
      age: "Teens (13-19)",
      emoji: "🧑",
      given: "Cash, clothing, tech accessories, skincare, video games",
      wanted: "Cash / gift cards (#1). Tech (AirPods, phone accessories). Brand-name clothing.",
      insight: "95% of adult-chosen 'cool' clothing for teens gets returned. Just give cash or gift cards to their favorite stores.",
      avgSpend: "$40-100"
    },
    {
      age: "20s",
      emoji: "🎉",
      given: "Cash, alcohol, restaurant gift cards, home goods (apartment starter)",
      wanted: "Cash, experiences (concerts, travel), practical upgrades (quality cookware)",
      insight: "People in their 20s are building their first adult life. Quality basics (a good chef's knife, nice sheets) = more memorable than a random gadget.",
      avgSpend: "$30-100"
    },
    {
      age: "30s",
      emoji: "💼",
      given: "Alcohol, restaurant gift cards, home decor, experiences",
      wanted: "Spa experiences, travel contributions, high-end home items, hobby-related gear",
      insight: "30-somethings are time-poor but materially comfortable. They want experiences, not more stuff. Underestimate experiences at your peril.",
      avgSpend: "$40-125"
    },
    {
      age: "40s",
      emoji: "🏠",
      given: "Alcohol, gift cards, books, hobby gifts",
      wanted: "Experiences, premium consumables (coffee subscription, craft beer), hobby tools",
      insight: "At this stage, 'I don't need anything' is the most common answer. Premium consumables they wouldn't buy themselves = the answer.",
      avgSpend: "$30-100"
    },
    {
      age: "50s",
      emoji: "👨‍🦳",
      given: "Alcohol, gift cards, gardening/grilling supplies",
      wanted: "Travel experiences, grandchild-related gifts, quality hobby items",
      insight: "Experiences with family outrank everything. If you can give them an outing with their grandkids, that beats any physical item.",
      avgSpend: "$30-100"
    },
    {
      age: "60+",
      emoji: "👵",
      given: "Photo gifts (grandkid pics), comfort items (blankets, slippers), books",
      wanted: "Family time above all. Digital photo frames, easy-to-use tech, meal/grocery delivery gift cards.",
      insight: "Never buy 'old person' products (magnifiers, grabber tools) unless specifically requested. It reads as condescending. Time with you is the real gift.",
      avgSpend: "$25-100"
    }
  ],

  // By recipient type
  recipientTypes: [
    { id: "for-him", emoji: "👨", name: "For Him", desc: "Gifts men actually want (not more ties)" },
    { id: "for-her", emoji: "👩", name: "For Her", desc: "Thoughtful over expensive, always" },
    { id: "for-kids", emoji: "👶", name: "For Kids", desc: "What's trending, not what you remember" },
    { id: "for-teens", emoji: "🧑", name: "For Teens", desc: "Spoiler: it's cash and gift cards" },
    { id: "for-parents", emoji: "👨‍👩‍👧", name: "For Parents", desc: "Give them time, not stuff" },
    { id: "for-grandparents", emoji: "👴", name: "For Grandparents", desc: "Family memories > everything" },
    { id: "for-coworkers", emoji: "💼", name: "For Coworkers", desc: "Professional, appropriate, appreciated" },
    { id: "for-teachers", emoji: "🍎", name: "For Teachers", desc: "Gift cards and classroom supplies win" }
  ],

  // By personality (unique angle)
  personalities: [
    { id: "minimalist", emoji: "🌿", name: "The Minimalist", desc: "They don't want more stuff. Give consumables & experiences." },
    { id: "foodie", emoji: "🍜", name: "The Foodie", desc: "Artisan ingredients, cooking tools, food tours" },
    { id: "tech-lover", emoji: "🤖", name: "The Tech Lover", desc: "The latest gadgets, smart home, accessories" },
    { id: "outdoor", emoji: "🏕️", name: "The Adventurer", desc: "Gear that makes their next trip better" },
    { id: "homebody", emoji: "🛋️", name: "The Homebody", desc: "Cozy upgrades for their sanctuary" },
    { id: "fitness", emoji: "💪", name: "The Fitness Buff", desc: "Gear that upgrades their workout" },
    { id: "creative", emoji: "🎨", name: "The Creative", desc: "Supplies and tools for making things" }
  ],

  // Quiz questions
  quiz: [
    {
      question: "Who is the gift for?",
      options: [
        { emoji: "👨", text: "My partner / spouse" },
        { emoji: "👩‍👧", text: "A family member" },
        { emoji: "🧑‍🤝‍🧑", text: "A close friend" },
        { emoji: "💼", text: "A coworker or acquaintance" },
        { emoji: "🎉", text: "It's for a party / Secret Santa" }
      ]
    },
    {
      question: "What's the occasion?",
      options: [
        { emoji: "🎄", text: "Christmas / Holiday" },
        { emoji: "🎂", text: "Birthday" },
        { emoji: "💝", text: "Valentine's / Romantic" },
        { emoji: "💒", text: "Wedding / Baby Shower" },
        { emoji: "✨", text: "Just because / Thank you" }
      ]
    },
    {
      question: "How would you describe the recipient?",
      options: [
        { emoji: "🏕️", text: "Adventurous & outdoorsy" },
        { emoji: "🛋️", text: "Cozy homebody" },
        { emoji: "🤖", text: "Tech & gadget lover" },
        { emoji: "🍜", text: "Food & drink enthusiast" },
        { emoji: "🎨", text: "Creative & artistic" }
      ]
    },
    {
      question: "What's your budget?",
      options: [
        { emoji: "💵", text: "Under $25" },
        { emoji: "💵💵", text: "$25 - $50" },
        { emoji: "💵💵💵", text: "$50 - $100" },
        { emoji: "💎", text: "$100 - $200" },
        { emoji: "👑", text: "$200+ (go big!)" }
      ]
    },
    {
      question: "What matters most?",
      options: [
        { emoji: "🎯", text: "Practicality — they should actually use it" },
        { emoji: "😭", text: "Sentimental value — make them feel something" },
        { emoji: "🌟", text: "Uniqueness — something they'd never buy themselves" },
        { emoji: "✨", text: "Experience — create a memory, not clutter" }
      ]
    }
  ]
};
