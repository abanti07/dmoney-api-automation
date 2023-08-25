const newman = require("newman");

newman.run(
  {
    collection:"https://api.postman.com/collections/29168426-32dea00e-f159-47de-9d8e-0d6d18f0eb0f?access_key=PMAT-01H8P6B5CT0HAV93GRWCRMT7YD", // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
