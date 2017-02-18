let description =
`
Cities comparision script
------------------------------------------
city (county) - (you will save money during 1 year, USD)
------------------------------------------`;

// OT - equivalent of 1$ purchasing power in Kiev
// salary field - salary for Java Dev with 5 year exp.
//
// * Numbers in USD.
let cities = [
  // ------------------- Australia ---------------------
  {
    name: "sydney", country: "Australia",
    // salary: {10: 57, 25: 67, 50: 78, 75:91, 90:100} // AUD
    salary: {
      10: 44, 25: 52, 50: 60, 75: 70, 90: 76
    }, // USD
    live: {
      apartment: 2000, ot: 3.81
    }, // USD
    tax: 0.22
  },
  {
    name: "Perth", country: "Australia",
    // salary: {10: 57, 25: 66, 50: 78, 75:91, 90:110} // AUD
    salary: {
      10: 44, 25: 52, 50: 60, 75: 70, 90: 84
    }, // USD
    live: {
      apartment: 1400, ot: 3.28
    }, // USD
    tax: 0.22
  },
  {
    name: "Melbourne", country: "Australia",
    // salary: {10: 56, 25: 66, 50: 77, 75:89, 90:100} // AUD
    salary: {
      10: 44, 25: 52, 50: 60, 75: 69, 90: 76
    }, // USD
    live: {
      apartment: 1300, ot: 3.15
    }, // USD
    tax: 0.22
  },
  {
    name: "Adelaide", country: "Australia",
    // salary: {10: 52, 25: 60, 50: 69, 75:80, 90:92} // AUD
    salary: {
      10: 40, 25: 46, 50: 53, 75: 61, 90: 71
    }, // USD
    live: {
      apartment: 1000, ot: 2.86
    },
    tax: 0.22
  },
  // ------------------- Netherlands ---------------------
  {
    name: "Amsterdam", country: "Netherlands",
    // salary: {10: 35, 25: 40, 50: 48, 75:57, 90:67}, // EUR
    salary: {
      10: 37, 25: 42, 50: 51, 75: 60, 90: 71
    }, // USD
    live: {
      apartment: 1400, ot: 3.08
    },
    tax: 0.4
  },
  // ------------------- Germania ---------------------
  {
    name: "Munich", country: "Germania",
    // salary: {10: 45, 25: 50, 50: 57, 75:64, 90:71}, // EUR
    salary: {
      10: 47.5, 25: 53, 50: 60, 75: 67.5, 90: 75
    }, // USD
    live: {
      apartment: 1000, ot: 2.75
    },
    tax: 0.45
  },
  {
    name: "Berlin", country: "Germania",
    // salary: {10: 41, 25: 45, 50: 50, 75:56, 90:63}, // EUR
    salary: {
      10: 43, 25: 47.5, 50: 52.7, 75: 59.1, 90: 66.5
    }, // USD
    live: {
      apartment: 800, ot: 2.27
    },
    tax: 0.45
  },
  {
    name: "Nuremberg", country: "Germania"
  },
  {
    name: "Hamburg", country: "Germania",
    // salary: {10: 38, 25: 42, 50: 47, 75:53, 90:59}, // EUR
    salary: {
      10: 40, 25: 42, 50: 44.3, 75: 56, 90: 62.2
    }, // USD
    live: {
      apartment: 800, ot: 2.59
    },
    tax: 0.45
  },
  {
    name: "Frankfurt", country: "Germania"
  },
  {
    name: "Dusseldorf", country: "Germania"
  },
  // ------------------- Norway ---------------------
  {
    name: "Oslo", country: "Norway",
    salary: {
      10: 50, 25: 59, 50: 69, 75: 82, 90: 95
    }, // USD
    live: {
      apartment: 1400, ot: 3.88
    }
  },
  // ------------------- Canada ---------------------
  {
    name: "Toronto", country: "Canada",
    salary: {
      10: 39, 25: 45, 50: 53, 75: 61, 90: 70
    }, // USD
    live: {
      apartment: 1200, ot: 2.75
    },
    tax: 0.2418
  },
  {
    name: "Calgary", country: "Canada"
  },
  {
    name: "Vancouver", country: "Canada",
    salary: {
      10: 41, 25: 48, 50: 55, 75: 64, 90: 73
    }, // USD
    live: {
      apartment: 1300, ot: 2.96
    },
    tax: 0.2418 // ???
  },
  {
    name: "Montreal", country: "Canada"
  },
  {
    name: "Ottawa", country: "Canada",
    salary: {
      10: 42, 25: 50, 50: 57, 75: 67, 90: 77
    }, // USD
    live: {
      apartment: 1000, ot: 2.50
    },
    tax: 0.2418
  },
  // ------------------- Sweden ---------------------
  {
    name: "Stockholm", country: "Sweden",
    salary: {
      10: 46, 25: 53, 50: 62, 75: 71, 90: 82
    }, // USD
    live: {
      apartment: 1300, ot: 3.08
    },
    tax: 0.3
  },
  // ------------------- Hungary ---------------------
  {
    name: "Budapest", country: "Hungary", // like Ukraine
    salary: {
      10: 15, 25: 19, 50: 25, 75: 32, 90: 41
    }, // USD
    live: {
      apartment: 500, ot: 1.47
    }
  },
  // ------------------- Denmark ---------------------
  {
    name: "Copenhagen", country: "Denmark",
    live: {
      apartment: 1300, ot: 3.29
    }
  },
  // ------------------- USA ---------------------
  {
    name: "Washington", country: "USA",
    salary: {
      10: 56, 25: 69, 50: 86, 75: 110, 90: 150
    }, // USD
    live: {
      apartment: 2200, ot: 4.22
    },
    tax: (5 + 18 + 5.75) / 100
  },
  {
    name: "Chicago", country: "USA",
    salary: {
      10: 57, 25: 69, 50: 82, 75: 97, 90: 110
    }, // USD
    live: {
      apartment: 1800, ot: 3.50
    },
    tax: (5 + 18 + 5) / 100
  },
  {
    name: "New York", country: "USA",
    salary: {
      10: 63, 25: 75, 50: 91, 75: 110, 90: 130
    }, // USD
    live: {
      apartment: 3000, ot: 4.94
    },
    tax: (5 + 18 + 8.82) / 100
  },
  {
    name: "Los Angeles", country: "USA"
  },
  {
    name: "Miami", country: "USA"
  },
  {
    name: "San Francisco", country: "USA",
    salary: {
      10: 78, 25: 94, 50: 110, 75: 130, 90: 160
    }, // USD
    live: {
      apartment: 3300, ot: 5.40
    },
    tax: (5 + 18 + 13.3) / 100
  },
  {
    name: "Boston", country: "USA",
    salary: {
      10: 56, 25: 78, 50: 93, 75: 110, 90: 130
    }, // USD
    live: {
      apartment: 2400, ot: 4.06
    },
    tax: (5 + 18 + 5.3) / 100
  },
  {
    name: "Atlanta", country: "USA",
    salary: {
      10: 57, 25: 69, 50: 82, 75: 97, 90: 110
    }, // USD
    live: {
      apartment: 1300, ot: 2.97
    },
    tax: (5 + 18 + 6) / 100
  },
  // ------------------- Singapore ---------------------
  {
    name: "Singapore", country: "Singapore"
  },
  // ------------------- Chile ---------------------
  {
    name: "Santiago", country: "Chile"
  },
  // ------------------- Portugal ---------------------
  {
    name: "Lisbon", country: "Portugal",
    salary: {
      10: 13, 25: 16, 50: 20, 75: 25, 90: 32
    },
    live: {
      apartment: 700, ot: 1.80
    }
  },
  // ------------------- Poland ---------------------
  {
    name: "Warsaw", country: "Poland"
  },
  // ------------------- Ukraine ---------------------
  {
    name: "Kiev", country: "Ukraine",
    salary: {
      10: 16, 25: 20, 50: 27, 75: 35, 90: 45
    }, // USD
    live: {
      apartment: 400, ot: 1
    },
    tax: 0.05
  },
  // ------------------- Romania ---------------------
  {
    name: "Bucharest", country: "Romania",
    salary: {
      10: 13, 25: 17, 50: 24, 75: 32, 90: 44
    }, // USD
    live: {
      apartment: 400, ot: 1.26
    }
  },
  // ------------------- New Zealand ---------------------
  {
    name: "Auckland", country: "New Zealand",
    // salary: {10: 55, 25: 62, 50: 72, 75:82, 90:94} // NZD
    salary: {
      10: 40, 25: 45, 50: 52, 75: 59, 90: 68
    }, // USD
    live: {
      apartment: 1250, ot: 3.24
    },
    tax: 0.3
  },
  {
    name: "Wellington", country: "New Zealand",
    // salary: {10: 56, 25: 64, 50: 74, 75:84, 90:96} // NZD
    salary: {
      10: 40, 25: 46, 50: 53, 75: 60, 90: 69
    }, // USD
    live: {
      apartment: 1000, ot: 2.84
    },
    tax: 0.3
  },
  // ------------------- Spain ---------------------
  {
    name: "Barcelona", country: "Spain",
    // salary: {10: 24, 25: 28, 50: 32, 75:38, 90:44}, // EUR
    salary: {
      10: 25.3, 25: 29.5, 50: 32, 75: 33.7, 90: 46.4
    }, // USD
    live: {
      apartment: 800, ot: 2.20
    },
    tax: 0.37
  },
  {
    name: "Madrid", country: "Spain",
    // salary: {10: 22, 25: 26, 50: 32, 75:39, 90:47}, // EUR
    salary: {
      10: 23.2, 25: 27.4, 50: 33.7, 75: 41.1, 90: 49.5
    }, // USD
    live: {
      apartment: 800, ot: 2.20
    },
    tax: 0.37
  }
];

const liningCostPerMonth = 700;

cities.forEach((city) => {
  if (!city.salary) return;
  city.cf = city.salary[75] * 1000 * (1 - (city.tax || 0.35)) -
    12 * ( liningCostPerMonth * city.live.ot + city.live.apartment );
});

cities = cities.sort((city1, city2) => {
  return city2.cf - city1.cf;
});


console.log( description );
cities.forEach((city) => {
  if (!city.salary) return;
  console.log(city.name, "(" + city.country + ")", " - ", city.cf);
});