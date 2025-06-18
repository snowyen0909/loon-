*/

const response = {
  "data": {
    "processAppleReceipt": {
      "__typename": "AppStoreSubscription",
      "error": 0,
      "subscription": {
        "__typename": "AppStoreSubscription",
        "status": "active",
        "originalPurchaseDate": "2025-06-19T18:42:57.000Z",
        "originalTransactionId": "2000000943499401",
        "expirationDate": "9999-12-31T23:59:59.000Z",
        "productId": "com.gingerlabs.Notability.pro_subscription",
        "tier": "pro",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "gracePeriodExpiresAt": null,
        "expirationIntent": "null",
        "overDeviceLimit": false,
        "user": null
      },
      "isClassic": false
    }
  }
};

$done({ body: JSON.stringify(response) });