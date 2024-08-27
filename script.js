


function detectBrowser() {
   
    const userAgent = navigator.userAgent;

   
    let browserName = "Unknown";
    let version = "Unknown";

    
    if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Chrome";
        version = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Firefox";
        version = userAgent.match(/Firefox\/(\d+)/)[1];
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        version = userAgent.match(/Version\/(\d+)/)[1];
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Edge";
        version = userAgent.match(/Edge\/(\d+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || !!document.documentMode) {
        browserName = "Internet Explorer";
        version = userAgent.match(/MSIE (\d+)/)[1];
    }

  
    document.getElementById('browser-info').textContent = `You are using ${browserName} version ${version}`;
}


detectBrowser();