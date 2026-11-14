
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.Ce7D83IV.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.BwOFXT5I.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094-legacy.jwOZNFJ4.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0-legacy.xXxjgRBc.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6-legacy.BDxIBPNd.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a-legacy.CuSCqDke.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa-legacy.CNo3jZVr.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3-legacy.D1FMOPtA.js","/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968-legacy.Be9BrJbg.js","/cdn/shopifycloud/checkout-web/assets/c1/7d6bf786-legacy.DrZ_rofe.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987-legacy.BkSJ7xGX.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8-legacy.CpBXmpw2.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45-legacy.lmPyHTXI.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d-legacy.DEql6wIC.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2-legacy._MEX-4t1.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b-legacy.DkZatcET.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda-legacy.DE68sF4R.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8-legacy.DQhD0uPC.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78-legacy.BOToTdFk.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5-legacy.BZ7T4o6R.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97-legacy.DbecW3lo.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749-legacy.CZLzW8rF.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668-legacy.S1j0KeHU.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc-legacy.CKhfKML1.js","/cdn/shopifycloud/checkout-web/assets/c1/b71b03d1-legacy.omkuQbU7.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30-legacy.CCul_OeJ.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758-legacy.CyJFt8Xa.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f-legacy.CQQbhBg0.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753-legacy.C62VpACE.js","/cdn/shopifycloud/checkout-web/assets/c1/dfb65aab-legacy.Cd3YYWAP.js","/cdn/shopifycloud/checkout-web/assets/c1/e1177f6f-legacy.RWDehcO_.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5-legacy.D0fIvdEg.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46-legacy.BR-lr2vP.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337-legacy.Db-m8UkO.js","/cdn/shopifycloud/checkout-web/assets/c1/5bf177e7-legacy.Bow9J7LQ.js","/cdn/shopifycloud/checkout-web/assets/c1/f3089cd3-legacy.Cgz1K7Qx.js","/cdn/shopifycloud/checkout-web/assets/c1/53e8828a-legacy.CWB2QfEG.js","/cdn/shopifycloud/checkout-web/assets/c1/4c5b1c9e-legacy.Bt0NR37i.js","/cdn/shopifycloud/checkout-web/assets/c1/a541bc81-legacy.C2qh1Gd7.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54-legacy.DH3crP69.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f-legacy.D5PiZES_.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79-legacy.gb4r6rdD.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548-legacy.CH12kvsm.js","/cdn/shopifycloud/checkout-web/assets/c1/5f07060a-legacy.BhUjOLyI.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304-legacy.DTm14at3.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d-legacy.C_Z97ChM.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576-legacy.Df9Y92uL.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b-legacy.CsIZ0sRW.js","/cdn/shopifycloud/checkout-web/assets/c1/f1754c88-legacy.CrHEUX54.js","/cdn/shopifycloud/checkout-web/assets/c1/5d731017-legacy.dltCoFT2.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33-legacy.nkdAEPwf.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a-legacy.BmFGwUo3.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25-legacy.DipsU-n4.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9-legacy.ZAYyA3HE.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0-legacy.2CF1sYz0.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226-legacy.eXTHSfoF.js","/cdn/shopifycloud/checkout-web/assets/c1/0e3247a0-legacy.C9-fimfq.js","/cdn/shopifycloud/checkout-web/assets/c1/1dbf806c-legacy.pkP-39Zn.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6-legacy.Yu4pAZja.js","/cdn/shopifycloud/checkout-web/assets/c1/e59ed41d-legacy.Bel5Kgss.js","/cdn/shopifycloud/checkout-web/assets/c1/674595ba-legacy.C8wxfnu3.js","/cdn/shopifycloud/checkout-web/assets/c1/173d1fdf-legacy.9-2_7nWP.js","/cdn/shopifycloud/checkout-web/assets/c1/0d85278a-legacy.Co044G-T.js","/cdn/shopifycloud/checkout-web/assets/c1/16138b9e-legacy.6bTs8UPg.js","/cdn/shopifycloud/checkout-web/assets/c1/55432860-legacy.B4w1d3fn.js","/cdn/shopifycloud/checkout-web/assets/c1/0be192b6-legacy.CDvCd0hp.js","/cdn/shopifycloud/checkout-web/assets/c1/2bce9289-legacy.2XQh86TO.js","/cdn/shopifycloud/checkout-web/assets/c1/62a11d3e-legacy.BDObTMTw.js","/cdn/shopifycloud/checkout-web/assets/c1/9a493f3d-legacy.BgnpnHMc.js","/cdn/shopifycloud/checkout-web/assets/c1/402b40d8-legacy.BJ9UdTNx.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71-legacy.BMVRC9wk.js","/cdn/shopifycloud/checkout-web/assets/c1/b4f06cd6-legacy.DNXiRqT_.js","/cdn/shopifycloud/checkout-web/assets/c1/2b0d1656-legacy.D70_pg-_.js","/cdn/shopifycloud/checkout-web/assets/c1/64c3067d-legacy.RC614MKO.js","/cdn/shopifycloud/checkout-web/assets/c1/bbe16958-legacy.BOdJxwLA.js","/cdn/shopifycloud/checkout-web/assets/c1/6a8181a5-legacy.Bk2fbPCu.js","/cdn/shopifycloud/checkout-web/assets/c1/4205169c-legacy.BK7mjI8w.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c-legacy.BTPEHC4d.js","/cdn/shopifycloud/checkout-web/assets/c1/542b75cf-legacy.hQgw5_c2.js","/cdn/shopifycloud/checkout-web/assets/c1/74e5a557-legacy.DD88CvT5.js","/cdn/shopifycloud/checkout-web/assets/c1/f4d0afee-legacy.hiWY5dnT.js","/cdn/shopifycloud/checkout-web/assets/c1/0b704646-legacy.B4qkHeTl.js","/cdn/shopifycloud/checkout-web/assets/c1/a7ef2c81-legacy.VS_BfNsO.js","/cdn/shopifycloud/checkout-web/assets/c1/70565d02-legacy.Dtgcb2wU.js","/cdn/shopifycloud/checkout-web/assets/c1/f0b3b291-legacy.6kARFEoe.js","/cdn/shopifycloud/checkout-web/assets/c1/114cc9d1-legacy.7y_RUBa9.js","/cdn/shopifycloud/checkout-web/assets/c1/e7ae9e74-legacy.CtXNfVAf.js","/cdn/shopifycloud/checkout-web/assets/c1/91e796b6-legacy.r3uOiaPD.js","/cdn/shopifycloud/checkout-web/assets/c1/a222330e-legacy.DKx_zEnD.js","/cdn/shopifycloud/checkout-web/assets/c1/c380a132-legacy.9hC3KrXL.js","/cdn/shopifycloud/checkout-web/assets/c1/3839d836-legacy.D6NXbaLL.js","/cdn/shopifycloud/checkout-web/assets/c1/72fde58e-legacy.DJJmGwx0.js","/cdn/shopifycloud/checkout-web/assets/c1/8cad6ded-legacy.Bc4A2OB1.js","/cdn/shopifycloud/checkout-web/assets/c1/9e556116-legacy.HcpIVyaF.js","/cdn/shopifycloud/checkout-web/assets/c1/abf134e3-legacy.CcXlPsyY.js","/cdn/shopifycloud/checkout-web/assets/c1/8e6bd8e5-legacy.B4zAo9z8.js","/cdn/shopifycloud/checkout-web/assets/c1/e6a05f36-legacy.DwLpiqmG.js","/cdn/shopifycloud/checkout-web/assets/c1/a012ee00-legacy.DVAOC00U.js","/cdn/shopifycloud/checkout-web/assets/c1/71b36506-legacy.D2uaQIFY.js","/cdn/shopifycloud/checkout-web/assets/c1/7aefefff-legacy.BDSnZyVQ.js","/cdn/shopifycloud/checkout-web/assets/c1/e72406f8-legacy.B-KrB9HN.js","/cdn/shopifycloud/checkout-web/assets/c1/bdb60128-legacy.2GIU6_-o.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226-legacy.Db9O9wAq.js","/cdn/shopifycloud/checkout-web/assets/c1/5d5cabdf-legacy.BMONjc1c.js","/cdn/shopifycloud/checkout-web/assets/c1/8efef14b-legacy.DyAcOafz.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81-legacy.DEkqN6v2.js","/cdn/shopifycloud/checkout-web/assets/c1/21162507-legacy.CokU_qaN.js","/cdn/shopifycloud/checkout-web/assets/c1/139f607b-legacy.B5V_bzjm.js","/cdn/shopifycloud/checkout-web/assets/c1/5f1fce8b-legacy.n6ftDVDO.js","/cdn/shopifycloud/checkout-web/assets/c1/bace9a08-legacy.CSvhXflz.js","/cdn/shopifycloud/checkout-web/assets/c1/8e2be3f2-legacy.DGuklYUV.js","/cdn/shopifycloud/checkout-web/assets/c1/2d034bf2-legacy.6KOOD00n.js","/cdn/shopifycloud/checkout-web/assets/c1/972590c9-legacy.DQX6Jka9.js","/cdn/shopifycloud/checkout-web/assets/c1/bc751930-legacy.0iZWJLyL.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd-legacy.IPM_s1nq.js","/cdn/shopifycloud/checkout-web/assets/c1/a70a5b74-legacy.Cusg7SrI.js","/cdn/shopifycloud/checkout-web/assets/c1/2692118b-legacy.6LpAWaPb.js","/cdn/shopifycloud/checkout-web/assets/c1/c4303b96-legacy.pJIdWUfh.js","/cdn/shopifycloud/checkout-web/assets/c1/7ee3a05c-legacy.DokfM4o5.js","/cdn/shopifycloud/checkout-web/assets/c1/0d8691fc-legacy.DDMWQe1t.js","/cdn/shopifycloud/checkout-web/assets/c1/b0923a20-legacy.DpZfpJi_.js","/cdn/shopifycloud/checkout-web/assets/c1/7e9c6d7c-legacy.uJPvoC0H.js","/cdn/shopifycloud/checkout-web/assets/c1/ea392d18-legacy.DYd2eSwO.js","/cdn/shopifycloud/checkout-web/assets/c1/b2ef26e8-legacy.VLz7X_Tl.js","/cdn/shopifycloud/checkout-web/assets/c1/99bfe9cf-legacy.B1mJ3qxr.js","/cdn/shopifycloud/checkout-web/assets/c1/3c46c6f5-legacy.CNqnKWjU.js","/cdn/shopifycloud/checkout-web/assets/c1/e29daa9a-legacy.Cl4lXqkC.js","/cdn/shopifycloud/checkout-web/assets/c1/b2371320-legacy.Dh1z2r-M.js","/cdn/shopifycloud/checkout-web/assets/c1/a735741f-legacy.BQL2qwGJ.js","/cdn/shopifycloud/checkout-web/assets/c1/5a1effbb-legacy.3dVdOkM7.js","/cdn/shopifycloud/checkout-web/assets/c1/67e8c664-legacy.CUFCPaSF.js","/cdn/shopifycloud/checkout-web/assets/c1/045c921f-legacy.CZEBtwH7.js","/cdn/shopifycloud/checkout-web/assets/c1/4bb32466-legacy.DgiTNRSV.js","/cdn/shopifycloud/checkout-web/assets/c1/ed37d3c3-legacy.Ccz1kIhf.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02-legacy.C9j0O9Zm.js","/cdn/shopifycloud/checkout-web/assets/c1/e32a8416-legacy.BqkuxPwX.js","/cdn/shopifycloud/checkout-web/assets/c1/eb0f242a-legacy.2uGMxEQD.js","/cdn/shopifycloud/checkout-web/assets/c1/109c16d9-legacy.C5btG3gF.js","/cdn/shopifycloud/checkout-web/assets/c1/05f561d4-legacy.TfdXUgay.js","/cdn/shopifycloud/checkout-web/assets/c1/69f8f26d-legacy.De4Bl1co.js","/cdn/shopifycloud/checkout-web/assets/c1/121bd940-legacy.8MqTzX8q.js","/cdn/shopifycloud/checkout-web/assets/c1/4b77f49a-legacy.BML5uOZM.js","/cdn/shopifycloud/checkout-web/assets/c1/41038fc5-legacy.B4macCfJ.js","/cdn/shopifycloud/checkout-web/assets/c1/071c0ba4-legacy.BtmoHfwg.js","/cdn/shopifycloud/checkout-web/assets/c1/8d9b1fe6-legacy.j4sSFNZ5.js","/cdn/shopifycloud/checkout-web/assets/c1/58f88e89-legacy.DrbyoCmN.js","/cdn/shopifycloud/checkout-web/assets/c1/4db11b69-legacy.BlsYpw1c.js","/cdn/shopifycloud/checkout-web/assets/c1/66ce9bb7-legacy.64-tqmMg.js","/cdn/shopifycloud/checkout-web/assets/c1/10dab80e-legacy.DQGdXBDO.js","/cdn/shopifycloud/checkout-web/assets/c1/2bff2525-legacy.CvXW0gAe.js","/cdn/shopifycloud/checkout-web/assets/c1/c1e3be47-legacy.CrI-mWAo.js","/cdn/shopifycloud/checkout-web/assets/c1/4431ba3a-legacy.DSKEPxKe.js","/cdn/shopifycloud/checkout-web/assets/c1/53feb4a7-legacy.DHJK_NdR.js","/cdn/shopifycloud/checkout-web/assets/c1/70676095-legacy.BAcdJJCj.js","/cdn/shopifycloud/checkout-web/assets/c1/3cbb1bee-legacy.BccWqVLw.js","/cdn/shopifycloud/checkout-web/assets/c1/b0920c52-legacy.CH3Bc0QD.js","/cdn/shopifycloud/checkout-web/assets/c1/eec09ba3-legacy.Ba8Wwbfd.js","/cdn/shopifycloud/checkout-web/assets/c1/0754daa8-legacy.DJYIpu5q.js","/cdn/shopifycloud/checkout-web/assets/c1/8b7d6012-legacy.CwOk0sV-.js","/cdn/shopifycloud/checkout-web/assets/c1/565bff04-legacy.Cbi70sTw.js","/cdn/shopifycloud/checkout-web/assets/c1/33cd60c3-legacy.BidqO2Q4.js","/cdn/shopifycloud/checkout-web/assets/c1/394584e5-legacy.DK6usBOU.js","/cdn/shopifycloud/checkout-web/assets/c1/40bf165a-legacy.D_S4noCk.js","/cdn/shopifycloud/checkout-web/assets/c1/3c7ea602-legacy.B5v6utN-.js","/cdn/shopifycloud/checkout-web/assets/c1/8b1d1f25-legacy.CAhPM2GD.js","/cdn/shopifycloud/checkout-web/assets/c1/49758c58-legacy.CnYqCtOi.js","/cdn/shopifycloud/checkout-web/assets/c1/6073d960-legacy.BjOA5JcV.js","/cdn/shopifycloud/checkout-web/assets/c1/68101692-legacy.D0_9KSd-.js","/cdn/shopifycloud/checkout-web/assets/c1/729daf6a-legacy.Bd2Ptrtt.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.BG0usfBQ.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.BnqKNptV.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.Ba_5OrSr.worker.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0726/9007/3736/files/RuneScape_Franchise_Logo-Gold_1_x320.png?v=1773764183"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  