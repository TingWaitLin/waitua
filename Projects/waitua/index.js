const UserAgents = require("user-agents");
const userAgentParse = require("useragent");
function userAgent() {
  const useAgentGenerator = new UserAgents((data) => {
    const uaData = userAgentParse.parse(data.userAgent);

    return (
      data.deviceCategory === "desktop" &&
      data["weight"] > 0.0006 &&
      uaData.family === "Chrome" &&
      ["Windows", "Mac OS X"].includes(uaData.os.family) &&
      data.viewportWidth >= 1200 &&
      data.viewportHeight > 740
    );
  });
  console.log(useAgentGenerator);
}

export default userAgent;
