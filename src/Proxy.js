/**
 * Get stock price
 */
function StockPrice() {
  /**
   * Stock Price
   * @param {String} name Stock Name
   * @return {Number | String} Stock Price / Empty String
   */
  this.getStockPrice = function (name) {
    console.log("Proxy requests:", name);
    if (name === "bitcoin") {
      return 20000;
    } else if (name === "ethereum") {
      return 1000;
    } else if (name === "algorand") {
      return 3;
    } else {
      return "";
    }
  };
}

/**
 * Get stock price by Proxy pattern
 */
function StockPriceProxy() {
  let stockPrice = new StockPrice();
  let stockPriceCache = {};
  return {
    /**
     * Proxy에서 실제 객체에 요청하는 api
     * @param {String} name
     * @returns {String} Cache 된 Items
     */
    getStockPrice: function (name) {
      console.log("actual requests:", name);
      if (!stockPriceCache[name]) {
        stockPriceCache[name] = stockPrice.getStockPrice(name);
      }
      return stockPriceCache[name];
    },

    // number of cache request
    getRequest: function () {
      let numberOfProxyItems = Object.keys(stockPriceCache).length;
      return numberOfProxyItems;
    },
  };
}

function getPrices() {
  let priceProxy = new StockPriceProxy();
  priceProxy.getStockPrice("bitcoin");
  priceProxy.getStockPrice("ethereum");
  priceProxy.getStockPrice("ethereum");
  priceProxy.getStockPrice("ethereum");
  priceProxy.getStockPrice("ethereum");
  priceProxy.getStockPrice("algorand");
  priceProxy.getStockPrice("algorand");
  priceProxy.getStockPrice("algorand");
  priceProxy.getStockPrice("algorand");
  priceProxy.getStockPrice("ethereum");
  priceProxy.getStockPrice("ethereum");

  console.log(
    "getPrices result(number of cache request):",
    priceProxy.getRequest()
  );
}

getPrices();
