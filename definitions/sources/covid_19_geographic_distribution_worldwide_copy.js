declare({
    database: "covid_US",
    name:  "covid_19_geographic_distribution_worldwide_copy",
    columns: [
        {name: "date", type: "DATE"},
        {name: "daily_deaths", type: "INTEGER"},
        {name: "confirmed_cases", type:"INTEGER"},
        {name: "contries_and_territories", type: "STRING"},
        {name: "geo_id", type: "STRING"},
        {name: "country_territory_code", type:"STRING"},
        {name: "pop_data_2019", type:"INTEGER"}
    ]
})
