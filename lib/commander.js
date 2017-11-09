const package = require("../package.json");
const program = require("commander");

module.exports = () => {
  program
    .version(package.version)
    .option("-d, --debug", "Running application with debug mode.")
    .option("-r, --release", "Running application with release mode.");

  /**
   * Release mode
   */
  program
    .command("release [options]")
    .description("Release the application.")
    .option(
      "-m, --method [method]",
      "Release the application with special method",
      /^(default|custom)$/i,
      "default"
    )
    .action((options, method) => {
      /**
       * set default options
       */
      var options = options || {
        method: method.method || "default"
      };
      console.log("Release the application with %s options", options.method);
      if (options.method === "default") {
        /**
         * default release generate
         */
      } else {
      }
    })
    .on("--help", () => {
      console.log("  Examples:");
      console.log();
      console.log(
        "    $ release              Using default options provided by auther to build application"
      );
      console.log(
        "    $ release -m           Using default method provided by auther to build application"
      );
      console.log(
        "    $ release -m default   Using default method provided by auther to build application"
      );
      console.log(
        "    $ release -m custom    Using your custom method to build application"
      );
      console.log();
    });

  program.parse(process.argv);

  if (program.debug) {
    console.log("=".repeatify(12) + " Debug " + "=".repeatify(12));
    const mode = "debug";
  }
  if (program.release) {
    console.log("=".repeatify(12) + " Release " + "=".repeatify(12));
    const mode = "release";
    // TODO
    /**
     * 添加判断是否已生成release版本
     */
  }
};

String.prototype.repeatify =
  String.prototype.repeatify ||
  function(times) {
    return times > 0 ? this.repeat(times) : "";
  };
