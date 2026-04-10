(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && o(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = r(s);
    fetch(s.href, f);
  }
})();
function pg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var vo = { exports: {} },
  tu = {};
var gm;
function Wv() {
  if (gm) return tu;
  gm = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(o, s, f) {
    var p = null;
    if (
      (f !== void 0 && (p = "" + f),
      s.key !== void 0 && (p = "" + s.key),
      "key" in s)
    ) {
      f = {};
      for (var y in s) y !== "key" && (f[y] = s[y]);
    } else f = s;
    return (
      (s = f.ref),
      { $$typeof: a, type: o, key: p, ref: s !== void 0 ? s : null, props: f }
    );
  }
  return ((tu.Fragment = i), (tu.jsx = r), (tu.jsxs = r), tu);
}
var hm;
function Fv() {
  return (hm || ((hm = 1), (vo.exports = Wv())), vo.exports);
}
var lt = Fv(),
  bo = { exports: {} },
  ut = {};
var ym;
function $v() {
  if (ym) return ut;
  ym = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function A(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    B = {};
  function Y(T, G, j) {
    ((this.props = T),
      (this.context = G),
      (this.refs = B),
      (this.updater = j || _));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (T, G) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, G, "setState");
    }),
    (Y.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    }));
  function V() {}
  V.prototype = Y.prototype;
  function I(T, G, j) {
    ((this.props = T),
      (this.context = G),
      (this.refs = B),
      (this.updater = j || _));
  }
  var Q = (I.prototype = new V());
  ((Q.constructor = I), H(Q, Y.prototype), (Q.isPureReactComponent = !0));
  var W = Array.isArray;
  function F() {}
  var Z = { H: null, A: null, T: null, S: null },
    it = Object.prototype.hasOwnProperty;
  function Ht(T, G, j) {
    var K = j.ref;
    return {
      $$typeof: a,
      type: T,
      key: G,
      ref: K !== void 0 ? K : null,
      props: j,
    };
  }
  function yt(T, G) {
    return Ht(T.type, G, T.props);
  }
  function bt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === a;
  }
  function Ot(T) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (j) {
        return G[j];
      })
    );
  }
  var nt = /\/+/g;
  function st(T, G) {
    return typeof T == "object" && T !== null && T.key != null
      ? Ot("" + T.key)
      : G.toString(36);
  }
  function gt(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(F, F)
            : ((T.status = "pending"),
              T.then(
                function (G) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = G));
                },
                function (G) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = G));
                },
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function M(T, G, j, K, at) {
    var rt = typeof T;
    (rt === "undefined" || rt === "boolean") && (T = null);
    var St = !1;
    if (T === null) St = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case a:
            case i:
              St = !0;
              break;
            case S:
              return ((St = T._init), M(St(T._payload), G, j, K, at));
          }
      }
    if (St)
      return (
        (at = at(T)),
        (St = K === "" ? "." + st(T, 0) : K),
        W(at)
          ? ((j = ""),
            St != null && (j = St.replace(nt, "$&/") + "/"),
            M(at, G, j, "", function (tn) {
              return tn;
            }))
          : at != null &&
            (bt(at) &&
              (at = yt(
                at,
                j +
                  (at.key == null || (T && T.key === at.key)
                    ? ""
                    : ("" + at.key).replace(nt, "$&/") + "/") +
                  St,
              )),
            G.push(at)),
        1
      );
    St = 0;
    var Pt = K === "" ? "." : K + ":";
    if (W(T))
      for (var Ut = 0; Ut < T.length; Ut++)
        ((K = T[Ut]), (rt = Pt + st(K, Ut)), (St += M(K, G, j, rt, at)));
    else if (((Ut = A(T)), typeof Ut == "function"))
      for (T = Ut.call(T), Ut = 0; !(K = T.next()).done; )
        ((K = K.value), (rt = Pt + st(K, Ut++)), (St += M(K, G, j, rt, at)));
    else if (rt === "object") {
      if (typeof T.then == "function") return M(gt(T), G, j, K, at);
      throw (
        (G = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return St;
  }
  function q(T, G, j) {
    if (T == null) return T;
    var K = [],
      at = 0;
    return (
      M(T, K, "", "", function (rt) {
        return G.call(j, rt, at++);
      }),
      K
    );
  }
  function k(T) {
    if (T._status === -1) {
      var G = T._result;
      ((G = G()),
        G.then(
          function (j) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = j));
          },
          function (j) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = j));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = G)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Et =
      typeof reportError == "function"
        ? reportError
        : function (T) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof T == "object" &&
                  T !== null &&
                  typeof T.message == "string"
                    ? String(T.message)
                    : String(T),
                error: T,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", T);
              return;
            }
            console.error(T);
          },
    xt = {
      map: q,
      forEach: function (T, G, j) {
        q(
          T,
          function () {
            G.apply(this, arguments);
          },
          j,
        );
      },
      count: function (T) {
        var G = 0;
        return (
          q(T, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (T) {
        return (
          q(T, function (G) {
            return G;
          }) || []
        );
      },
      only: function (T) {
        if (!bt(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    };
  return (
    (ut.Activity = v),
    (ut.Children = xt),
    (ut.Component = Y),
    (ut.Fragment = r),
    (ut.Profiler = s),
    (ut.PureComponent = I),
    (ut.StrictMode = o),
    (ut.Suspense = g),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (ut.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return Z.H.useMemoCache(T);
      },
    }),
    (ut.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (ut.cacheSignal = function () {
      return null;
    }),
    (ut.cloneElement = function (T, G, j) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + ".",
        );
      var K = H({}, T.props),
        at = T.key;
      if (G != null)
        for (rt in (G.key !== void 0 && (at = "" + G.key), G))
          !it.call(G, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && G.ref === void 0) ||
            (K[rt] = G[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) K.children = j;
      else if (1 < rt) {
        for (var St = Array(rt), Pt = 0; Pt < rt; Pt++)
          St[Pt] = arguments[Pt + 2];
        K.children = St;
      }
      return Ht(T.type, at, K);
    }),
    (ut.createContext = function (T) {
      return (
        (T = {
          $$typeof: p,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: f, _context: T }),
        T
      );
    }),
    (ut.createElement = function (T, G, j) {
      var K,
        at = {},
        rt = null;
      if (G != null)
        for (K in (G.key !== void 0 && (rt = "" + G.key), G))
          it.call(G, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (at[K] = G[K]);
      var St = arguments.length - 2;
      if (St === 1) at.children = j;
      else if (1 < St) {
        for (var Pt = Array(St), Ut = 0; Ut < St; Ut++)
          Pt[Ut] = arguments[Ut + 2];
        at.children = Pt;
      }
      if (T && T.defaultProps)
        for (K in ((St = T.defaultProps), St))
          at[K] === void 0 && (at[K] = St[K]);
      return Ht(T, rt, at);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (T) {
      return { $$typeof: y, render: T };
    }),
    (ut.isValidElement = bt),
    (ut.lazy = function (T) {
      return { $$typeof: S, _payload: { _status: -1, _result: T }, _init: k };
    }),
    (ut.memo = function (T, G) {
      return { $$typeof: m, type: T, compare: G === void 0 ? null : G };
    }),
    (ut.startTransition = function (T) {
      var G = Z.T,
        j = {};
      Z.T = j;
      try {
        var K = T(),
          at = Z.S;
        (at !== null && at(j, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(F, Et));
      } catch (rt) {
        Et(rt);
      } finally {
        (G !== null && j.types !== null && (G.types = j.types), (Z.T = G));
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (ut.use = function (T) {
      return Z.H.use(T);
    }),
    (ut.useActionState = function (T, G, j) {
      return Z.H.useActionState(T, G, j);
    }),
    (ut.useCallback = function (T, G) {
      return Z.H.useCallback(T, G);
    }),
    (ut.useContext = function (T) {
      return Z.H.useContext(T);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (T, G) {
      return Z.H.useDeferredValue(T, G);
    }),
    (ut.useEffect = function (T, G) {
      return Z.H.useEffect(T, G);
    }),
    (ut.useEffectEvent = function (T) {
      return Z.H.useEffectEvent(T);
    }),
    (ut.useId = function () {
      return Z.H.useId();
    }),
    (ut.useImperativeHandle = function (T, G, j) {
      return Z.H.useImperativeHandle(T, G, j);
    }),
    (ut.useInsertionEffect = function (T, G) {
      return Z.H.useInsertionEffect(T, G);
    }),
    (ut.useLayoutEffect = function (T, G) {
      return Z.H.useLayoutEffect(T, G);
    }),
    (ut.useMemo = function (T, G) {
      return Z.H.useMemo(T, G);
    }),
    (ut.useOptimistic = function (T, G) {
      return Z.H.useOptimistic(T, G);
    }),
    (ut.useReducer = function (T, G, j) {
      return Z.H.useReducer(T, G, j);
    }),
    (ut.useRef = function (T) {
      return Z.H.useRef(T);
    }),
    (ut.useState = function (T) {
      return Z.H.useState(T);
    }),
    (ut.useSyncExternalStore = function (T, G, j) {
      return Z.H.useSyncExternalStore(T, G, j);
    }),
    (ut.useTransition = function () {
      return Z.H.useTransition();
    }),
    (ut.version = "19.2.4"),
    ut
  );
}
var vm;
function Ii() {
  return (vm || ((vm = 1), (bo.exports = $v())), bo.exports);
}
var X = Ii();
const Xt = pg(X);
var So = { exports: {} },
  eu = {},
  Eo = { exports: {} },
  Do = {};
var bm;
function kv() {
  return (
    bm ||
      ((bm = 1),
      (function (a) {
        function i(M, q) {
          var k = M.length;
          M.push(q);
          t: for (; 0 < k; ) {
            var Et = (k - 1) >>> 1,
              xt = M[Et];
            if (0 < s(xt, q)) ((M[Et] = q), (M[k] = xt), (k = Et));
            else break t;
          }
        }
        function r(M) {
          return M.length === 0 ? null : M[0];
        }
        function o(M) {
          if (M.length === 0) return null;
          var q = M[0],
            k = M.pop();
          if (k !== q) {
            M[0] = k;
            t: for (var Et = 0, xt = M.length, T = xt >>> 1; Et < T; ) {
              var G = 2 * (Et + 1) - 1,
                j = M[G],
                K = G + 1,
                at = M[K];
              if (0 > s(j, k))
                K < xt && 0 > s(at, j)
                  ? ((M[Et] = at), (M[K] = k), (Et = K))
                  : ((M[Et] = j), (M[G] = k), (Et = G));
              else if (K < xt && 0 > s(at, k))
                ((M[Et] = at), (M[K] = k), (Et = K));
              else break t;
            }
          }
          return q;
        }
        function s(M, q) {
          var k = M.sortIndex - q.sortIndex;
          return k !== 0 ? k : M.id - q.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            y = p.now();
          a.unstable_now = function () {
            return p.now() - y;
          };
        }
        var g = [],
          m = [],
          S = 1,
          v = null,
          b = 3,
          A = !1,
          _ = !1,
          H = !1,
          B = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        function Q(M) {
          for (var q = r(m); q !== null; ) {
            if (q.callback === null) o(m);
            else if (q.startTime <= M)
              (o(m), (q.sortIndex = q.expirationTime), i(g, q));
            else break;
            q = r(m);
          }
        }
        function W(M) {
          if (((H = !1), Q(M), !_))
            if (r(g) !== null) ((_ = !0), F || ((F = !0), Ot()));
            else {
              var q = r(m);
              q !== null && gt(W, q.startTime - M);
            }
        }
        var F = !1,
          Z = -1,
          it = 5,
          Ht = -1;
        function yt() {
          return B ? !0 : !(a.unstable_now() - Ht < it);
        }
        function bt() {
          if (((B = !1), F)) {
            var M = a.unstable_now();
            Ht = M;
            var q = !0;
            try {
              t: {
                ((_ = !1), H && ((H = !1), V(Z), (Z = -1)), (A = !0));
                var k = b;
                try {
                  e: {
                    for (
                      Q(M), v = r(g);
                      v !== null && !(v.expirationTime > M && yt());
                    ) {
                      var Et = v.callback;
                      if (typeof Et == "function") {
                        ((v.callback = null), (b = v.priorityLevel));
                        var xt = Et(v.expirationTime <= M);
                        if (((M = a.unstable_now()), typeof xt == "function")) {
                          ((v.callback = xt), Q(M), (q = !0));
                          break e;
                        }
                        (v === r(g) && o(g), Q(M));
                      } else o(g);
                      v = r(g);
                    }
                    if (v !== null) q = !0;
                    else {
                      var T = r(m);
                      (T !== null && gt(W, T.startTime - M), (q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((v = null), (b = k), (A = !1));
                }
                q = void 0;
              }
            } finally {
              q ? Ot() : (F = !1);
            }
          }
        }
        var Ot;
        if (typeof I == "function")
          Ot = function () {
            I(bt);
          };
        else if (typeof MessageChannel < "u") {
          var nt = new MessageChannel(),
            st = nt.port2;
          ((nt.port1.onmessage = bt),
            (Ot = function () {
              st.postMessage(null);
            }));
        } else
          Ot = function () {
            Y(bt, 0);
          };
        function gt(M, q) {
          Z = Y(function () {
            M(a.unstable_now());
          }, q);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (a.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (it = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (a.unstable_next = function (M) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = b;
            }
            var k = b;
            b = q;
            try {
              return M();
            } finally {
              b = k;
            }
          }),
          (a.unstable_requestPaint = function () {
            B = !0;
          }),
          (a.unstable_runWithPriority = function (M, q) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var k = b;
            b = M;
            try {
              return q();
            } finally {
              b = k;
            }
          }),
          (a.unstable_scheduleCallback = function (M, q, k) {
            var Et = a.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? Et + k : Et))
                : (k = Et),
              M)
            ) {
              case 1:
                var xt = -1;
                break;
              case 2:
                xt = 250;
                break;
              case 5:
                xt = 1073741823;
                break;
              case 4:
                xt = 1e4;
                break;
              default:
                xt = 5e3;
            }
            return (
              (xt = k + xt),
              (M = {
                id: S++,
                callback: q,
                priorityLevel: M,
                startTime: k,
                expirationTime: xt,
                sortIndex: -1,
              }),
              k > Et
                ? ((M.sortIndex = k),
                  i(m, M),
                  r(g) === null &&
                    M === r(m) &&
                    (H ? (V(Z), (Z = -1)) : (H = !0), gt(W, k - Et)))
                : ((M.sortIndex = xt),
                  i(g, M),
                  _ || A || ((_ = !0), F || ((F = !0), Ot()))),
              M
            );
          }),
          (a.unstable_shouldYield = yt),
          (a.unstable_wrapCallback = function (M) {
            var q = b;
            return function () {
              var k = b;
              b = q;
              try {
                return M.apply(this, arguments);
              } finally {
                b = k;
              }
            };
          }));
      })(Do)),
    Do
  );
}
var Sm;
function Pv() {
  return (Sm || ((Sm = 1), (Eo.exports = kv())), Eo.exports);
}
var Ao = { exports: {} },
  re = {};
var Em;
function tb() {
  if (Em) return re;
  Em = 1;
  var a = Ii();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var o = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function f(g, m, S) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : "" + v,
      children: g,
      containerInfo: m,
      implementation: S,
    };
  }
  var p = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (re.createPortal = function (g, m) {
      var S =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return f(g, m, null, S);
    }),
    (re.flushSync = function (g) {
      var m = p.T,
        S = o.p;
      try {
        if (((p.T = null), (o.p = 2), g)) return g();
      } finally {
        ((p.T = m), (o.p = S), o.d.f());
      }
    }),
    (re.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        o.d.C(g, m));
    }),
    (re.prefetchDNS = function (g) {
      typeof g == "string" && o.d.D(g);
    }),
    (re.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var S = m.as,
          v = y(S, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        S === "style"
          ? o.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: A,
            })
          : S === "script" &&
            o.d.X(g, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: A,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (re.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var S = y(m.as, m.crossOrigin);
            o.d.M(g, {
              crossOrigin: S,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(g);
    }),
    (re.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var S = m.as,
          v = y(S, m.crossOrigin);
        o.d.L(g, S, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (re.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var S = y(m.as, m.crossOrigin);
          o.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: S,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else o.d.m(g);
    }),
    (re.requestFormReset = function (g) {
      o.d.r(g);
    }),
    (re.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (re.useFormState = function (g, m, S) {
      return p.H.useFormState(g, m, S);
    }),
    (re.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (re.version = "19.2.4"),
    re
  );
}
var Dm;
function mg() {
  if (Dm) return Ao.exports;
  Dm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (Ao.exports = tb()), Ao.exports);
}
var Am;
function eb() {
  if (Am) return eu;
  Am = 1;
  var a = Pv(),
    i = Ii(),
    r = mg();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t) throw Error(o(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === n) return (g(u), t);
          if (c === l) return (g(u), e);
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) ((n = u), (l = c));
      else {
        for (var d = !1, h = u.child; h; ) {
          if (h === n) {
            ((d = !0), (n = u), (l = c));
            break;
          }
          if (h === l) {
            ((d = !0), (l = u), (n = c));
            break;
          }
          h = h.sibling;
        }
        if (!d) {
          for (h = c.child; h; ) {
            if (h === n) {
              ((d = !0), (n = c), (l = u));
              break;
            }
            if (h === l) {
              ((d = !0), (l = c), (n = u));
              break;
            }
            h = h.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = S(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    I = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Ht = Symbol.for("react.activity"),
    yt = Symbol.for("react.memo_cache_sentinel"),
    bt = Symbol.iterator;
  function Ot(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (bt && t[bt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var nt = Symbol.for("react.client.reference");
  function st(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === nt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case Y:
        return "Profiler";
      case B:
        return "StrictMode";
      case W:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Ht:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case _:
          return "Portal";
        case I:
          return t.displayName || "Context";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case Q:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (e = t.displayName || null),
            e !== null ? e : st(t.type) || "Memo"
          );
        case it:
          ((e = t._payload), (t = t._init));
          try {
            return st(t(e));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    Et = [],
    xt = -1;
  function T(t) {
    return { current: t };
  }
  function G(t) {
    0 > xt || ((t.current = Et[xt]), (Et[xt] = null), xt--);
  }
  function j(t, e) {
    (xt++, (Et[xt] = t.current), (t.current = e));
  }
  var K = T(null),
    at = T(null),
    rt = T(null),
    St = T(null);
  function Pt(t, e) {
    switch ((j(rt, e), j(at, t), j(K, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? wp(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = wp(e)), (t = qp(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (G(K), j(K, t));
  }
  function Ut() {
    (G(K), G(at), G(rt));
  }
  function tn(t) {
    t.memoizedState !== null && j(St, t);
    var e = K.current,
      n = qp(e, t.type);
    e !== n && (j(at, t), j(K, n));
  }
  function ca(t) {
    (at.current === t && (G(K), G(at)),
      St.current === t && (G(St), (Fa._currentValue = k)));
  }
  var ce, Sn;
  function Wn(t) {
    if (ce === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((ce = (e && e[1]) || ""),
          (Sn =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ce +
      t +
      Sn
    );
  }
  var tc = !1;
  function ec(t, e) {
    if (!t || tc) return "";
    tc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (N) {
                  var R = N;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (N) {
                  R = N;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                R = N;
              }
              (L = t()) &&
                typeof L.catch == "function" &&
                L.catch(function () {});
            }
          } catch (N) {
            if (N && R && typeof N.stack == "string") return [N.stack, R.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = l.DetermineComponentFrameRoot(),
        d = c[0],
        h = c[1];
      if (d && h) {
        var E = d.split(`
`),
          C = h.split(`
`);
        for (
          u = l = 0;
          l < E.length && !E[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; u < C.length && !C[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === E.length || u === C.length)
          for (
            l = E.length - 1, u = C.length - 1;
            1 <= l && 0 <= u && E[l] !== C[u];
          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (E[l] !== C[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || E[l] !== C[u])) {
                  var z =
                    `
` + E[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((tc = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Wn(n) : "";
  }
  function xh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Wn(t.type);
      case 16:
        return Wn("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Wn("Suspense Fallback")
          : Wn("Suspense");
      case 19:
        return Wn("SuspenseList");
      case 0:
      case 15:
        return ec(t.type, !1);
      case 11:
        return ec(t.type.render, !1);
      case 1:
        return ec(t.type, !0);
      case 31:
        return Wn("Activity");
      default:
        return "";
    }
  }
  function ms(t) {
    try {
      var e = "",
        n = null;
      do ((e += xh(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var nc = Object.prototype.hasOwnProperty,
    lc = a.unstable_scheduleCallback,
    ac = a.unstable_cancelCallback,
    Ch = a.unstable_shouldYield,
    Rh = a.unstable_requestPaint,
    be = a.unstable_now,
    Nh = a.unstable_getCurrentPriorityLevel,
    gs = a.unstable_ImmediatePriority,
    hs = a.unstable_UserBlockingPriority,
    hu = a.unstable_NormalPriority,
    Mh = a.unstable_LowPriority,
    ys = a.unstable_IdlePriority,
    _h = a.log,
    zh = a.unstable_setDisableYieldValue,
    ra = null,
    Se = null;
  function En(t) {
    if (
      (typeof _h == "function" && zh(t),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(ra, t);
      } catch {}
  }
  var Ee = Math.clz32 ? Math.clz32 : Hh,
    Bh = Math.log,
    Uh = Math.LN2;
  function Hh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Bh(t) / Uh) | 0)) | 0);
  }
  var yu = 256,
    vu = 262144,
    bu = 4194304;
  function Fn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Su(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      c = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var h = l & 134217727;
    return (
      h !== 0
        ? ((l = h & ~c),
          l !== 0
            ? (u = Fn(l))
            : ((d &= h),
              d !== 0
                ? (u = Fn(d))
                : n || ((n = h & ~t), n !== 0 && (u = Fn(n)))))
        : ((h = l & ~c),
          h !== 0
            ? (u = Fn(h))
            : d !== 0
              ? (u = Fn(d))
              : n || ((n = l & ~t), n !== 0 && (u = Fn(n)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & c) === 0 &&
            ((c = u & -u),
            (n = e & -e),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? e
          : u
    );
  }
  function oa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vs() {
    var t = bu;
    return ((bu <<= 1), (bu & 62914560) === 0 && (bu = 4194304), t);
  }
  function uc(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function sa(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Lh(t, e, n, l, u, c) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var h = t.entanglements,
      E = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var z = 31 - Ee(n),
        L = 1 << z;
      ((h[z] = 0), (E[z] = -1));
      var R = C[z];
      if (R !== null)
        for (C[z] = null, z = 0; z < R.length; z++) {
          var N = R[z];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~L;
    }
    (l !== 0 && bs(t, l, 0),
      c !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(d & ~e)));
  }
  function bs(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Ee(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Ss(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Ee(n),
        u = 1 << l;
      ((u & e) | (t[l] & e) && (t[l] |= e), (n &= ~u));
    }
  }
  function Es(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : ic(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function ic(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function cc(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ds() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : rm(t.type));
  }
  function As(t, e) {
    var n = q.p;
    try {
      return ((q.p = t), e());
    } finally {
      q.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2),
    te = "__reactFiber$" + Dn,
    de = "__reactProps$" + Dn,
    yl = "__reactContainer$" + Dn,
    rc = "__reactEvents$" + Dn,
    wh = "__reactListeners$" + Dn,
    qh = "__reactHandles$" + Dn,
    Ts = "__reactResources$" + Dn,
    fa = "__reactMarker$" + Dn;
  function oc(t) {
    (delete t[te], delete t[de], delete t[rc], delete t[wh], delete t[qh]);
  }
  function vl(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[yl] || n[te])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Ip(t); t !== null; ) {
            if ((n = t[te])) return n;
            t = Ip(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function bl(t) {
    if ((t = t[te] || t[yl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function da(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Sl(t) {
    var e = t[Ts];
    return (
      e ||
        (e = t[Ts] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Wt(t) {
    t[fa] = !0;
  }
  var Os = new Set(),
    xs = {};
  function $n(t, e) {
    (El(t, e), El(t + "Capture", e));
  }
  function El(t, e) {
    for (xs[t] = e, t = 0; t < e.length; t++) Os.add(e[t]);
  }
  var Yh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Cs = {},
    Rs = {};
  function jh(t) {
    return nc.call(Rs, t)
      ? !0
      : nc.call(Cs, t)
        ? !1
        : Yh.test(t)
          ? (Rs[t] = !0)
          : ((Cs[t] = !0), !1);
  }
  function Eu(t, e, n) {
    if (jh(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Du(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function en(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function ze(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ns(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Vh(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        c = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((n = "" + d), c.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function sc(t) {
    if (!t._valueTracker) {
      var e = Ns(t) ? "checked" : "value";
      t._valueTracker = Vh(t, e, "" + t[e]);
    }
  }
  function Ms(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Ns(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Au(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Xh = /[\n"\\]/g;
  function Be(t) {
    return t.replace(Xh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function fc(t, e, n, l, u, c, d, h) {
    ((t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ze(e))
          : t.value !== "" + ze(e) && (t.value = "" + ze(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? dc(t, d, ze(e))
        : n != null
          ? dc(t, d, ze(n))
          : l != null && t.removeAttribute("value"),
      u == null && c != null && (t.defaultChecked = !!c),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.name = "" + ze(h))
        : t.removeAttribute("name"));
  }
  function _s(t, e, n, l, u, c, d, h) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) {
        sc(t);
        return;
      }
      ((n = n != null ? "" + ze(n) : ""),
        (e = e != null ? "" + ze(e) : n),
        h || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = h ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      sc(t));
  }
  function dc(t, e, n) {
    (e === "number" && Au(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Dl(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < n.length; u++) e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        ((u = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== u && (t[n].selected = u),
          u && l && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + ze(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          ((t[u].selected = !0), l && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function zs(t, e, n) {
    if (
      e != null &&
      ((e = "" + ze(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function Bs(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (gt(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = ze(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      sc(t));
  }
  function Al(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Us(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Qh.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Hs(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var u in e)
        ((l = e[u]), e.hasOwnProperty(u) && n[u] !== l && Us(t, u, l));
    } else for (var c in e) e.hasOwnProperty(c) && Us(t, c, e[c]);
  }
  function pc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Ih =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tu(t) {
    return Ih.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function nn() {}
  var mc = null;
  function gc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Tl = null,
    Ol = null;
  function Gs(t) {
    var e = bl(t);
    if (e && (t = e.stateNode)) {
      var n = t[de] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (fc(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Be("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var u = l[de] || null;
                if (!u) throw Error(o(90));
                fc(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((l = n[e]), l.form === t.form && Ms(l));
          }
          break t;
        case "textarea":
          zs(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Dl(t, !!n.multiple, e, !1));
      }
    }
  }
  var hc = !1;
  function Ls(t, e, n) {
    if (hc) return t(e, n);
    hc = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((hc = !1),
        (Tl !== null || Ol !== null) &&
          (fi(), Tl && ((e = Tl), (t = Ol), (Ol = Tl = null), Gs(e), t)))
      )
        for (e = 0; e < t.length; e++) Gs(t[e]);
    }
  }
  function pa(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[de] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    yc = !1;
  if (ln)
    try {
      var ma = {};
      (Object.defineProperty(ma, "passive", {
        get: function () {
          yc = !0;
        },
      }),
        window.addEventListener("test", ma, ma),
        window.removeEventListener("test", ma, ma));
    } catch {
      yc = !1;
    }
  var An = null,
    vc = null,
    Ou = null;
  function ws() {
    if (Ou) return Ou;
    var t,
      e = vc,
      n = e.length,
      l,
      u = "value" in An ? An.value : An.textContent,
      c = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === u[c - l]; l++);
    return (Ou = u.slice(t, 1 < l ? 1 - l : void 0));
  }
  function xu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Cu() {
    return !0;
  }
  function qs() {
    return !1;
  }
  function pe(t) {
    function e(n, l, u, c, d) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = d),
        (this.currentTarget = null));
      for (var h in t)
        t.hasOwnProperty(h) && ((n = t[h]), (this[h] = n ? n(c) : c[h]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Cu
          : qs),
        (this.isPropagationStopped = qs),
        this
      );
    }
    return (
      v(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cu));
        },
        persist: function () {},
        isPersistent: Cu,
      }),
      e
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ru = pe(kn),
    ga = v({}, kn, { view: 0, detail: 0 }),
    Kh = pe(ga),
    bc,
    Sc,
    ha,
    Nu = v({}, ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ha &&
              (ha && t.type === "mousemove"
                ? ((bc = t.screenX - ha.screenX), (Sc = t.screenY - ha.screenY))
                : (Sc = bc = 0),
              (ha = t)),
            bc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Sc;
      },
    }),
    Ys = pe(Nu),
    Jh = v({}, Nu, { dataTransfer: 0 }),
    Wh = pe(Jh),
    Fh = v({}, ga, { relatedTarget: 0 }),
    Ec = pe(Fh),
    $h = v({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kh = pe($h),
    Ph = v({}, kn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ty = pe(Ph),
    ey = v({}, kn, { data: 0 }),
    js = pe(ey),
    ny = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ly = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ay = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function uy(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ay[t])
        ? !!e[t]
        : !1;
  }
  function Dc() {
    return uy;
  }
  var iy = v({}, ga, {
      key: function (t) {
        if (t.key) {
          var e = ny[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = xu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? ly[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dc,
      charCode: function (t) {
        return t.type === "keypress" ? xu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? xu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    cy = pe(iy),
    ry = v({}, Nu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vs = pe(ry),
    oy = v({}, ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dc,
    }),
    sy = pe(oy),
    fy = v({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dy = pe(fy),
    py = v({}, Nu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    my = pe(py),
    gy = v({}, kn, { newState: 0, oldState: 0 }),
    hy = pe(gy),
    yy = [9, 13, 27, 32],
    Ac = ln && "CompositionEvent" in window,
    ya = null;
  ln && "documentMode" in document && (ya = document.documentMode);
  var vy = ln && "TextEvent" in window && !ya,
    Xs = ln && (!Ac || (ya && 8 < ya && 11 >= ya)),
    Qs = " ",
    Zs = !1;
  function Is(t, e) {
    switch (t) {
      case "keyup":
        return yy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ks(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var xl = !1;
  function by(t, e) {
    switch (t) {
      case "compositionend":
        return Ks(e);
      case "keypress":
        return e.which !== 32 ? null : ((Zs = !0), Qs);
      case "textInput":
        return ((t = e.data), t === Qs && Zs ? null : t);
      default:
        return null;
    }
  }
  function Sy(t, e) {
    if (xl)
      return t === "compositionend" || (!Ac && Is(t, e))
        ? ((t = ws()), (Ou = vc = An = null), (xl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Xs && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ey = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Js(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ey[t.type] : e === "textarea";
  }
  function Ws(t, e, n, l) {
    (Tl ? (Ol ? Ol.push(l) : (Ol = [l])) : (Tl = l),
      (e = vi(e, "onChange")),
      0 < e.length &&
        ((n = new Ru("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e })));
  }
  var va = null,
    ba = null;
  function Dy(t) {
    zp(t, 0);
  }
  function Mu(t) {
    var e = da(t);
    if (Ms(e)) return t;
  }
  function Fs(t, e) {
    if (t === "change") return e;
  }
  var $s = !1;
  if (ln) {
    var Tc;
    if (ln) {
      var Oc = "oninput" in document;
      if (!Oc) {
        var ks = document.createElement("div");
        (ks.setAttribute("oninput", "return;"),
          (Oc = typeof ks.oninput == "function"));
      }
      Tc = Oc;
    } else Tc = !1;
    $s = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ps() {
    va && (va.detachEvent("onpropertychange", tf), (ba = va = null));
  }
  function tf(t) {
    if (t.propertyName === "value" && Mu(ba)) {
      var e = [];
      (Ws(e, ba, t, gc(t)), Ls(Dy, e));
    }
  }
  function Ay(t, e, n) {
    t === "focusin"
      ? (Ps(), (va = e), (ba = n), va.attachEvent("onpropertychange", tf))
      : t === "focusout" && Ps();
  }
  function Ty(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Mu(ba);
  }
  function Oy(t, e) {
    if (t === "click") return Mu(e);
  }
  function xy(t, e) {
    if (t === "input" || t === "change") return Mu(e);
  }
  function Cy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var De = typeof Object.is == "function" ? Object.is : Cy;
  function Sa(t, e) {
    if (De(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!nc.call(e, u) || !De(t[u], e[u])) return !1;
    }
    return !0;
  }
  function ef(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function nf(t, e) {
    var n = ef(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ef(n);
    }
  }
  function lf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? lf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function af(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Au(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Au(t.document);
    }
    return e;
  }
  function xc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Ry = ln && "documentMode" in document && 11 >= document.documentMode,
    Cl = null,
    Cc = null,
    Ea = null,
    Rc = !1;
  function uf(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Rc ||
      Cl == null ||
      Cl !== Au(l) ||
      ((l = Cl),
      "selectionStart" in l && xc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ea && Sa(Ea, l)) ||
        ((Ea = l),
        (l = vi(Cc, "onSelect")),
        0 < l.length &&
          ((e = new Ru("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Cl))));
  }
  function Pn(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Rl = {
      animationend: Pn("Animation", "AnimationEnd"),
      animationiteration: Pn("Animation", "AnimationIteration"),
      animationstart: Pn("Animation", "AnimationStart"),
      transitionrun: Pn("Transition", "TransitionRun"),
      transitionstart: Pn("Transition", "TransitionStart"),
      transitioncancel: Pn("Transition", "TransitionCancel"),
      transitionend: Pn("Transition", "TransitionEnd"),
    },
    Nc = {},
    cf = {};
  ln &&
    ((cf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rl.animationend.animation,
      delete Rl.animationiteration.animation,
      delete Rl.animationstart.animation),
    "TransitionEvent" in window || delete Rl.transitionend.transition);
  function tl(t) {
    if (Nc[t]) return Nc[t];
    if (!Rl[t]) return t;
    var e = Rl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in cf) return (Nc[t] = e[n]);
    return t;
  }
  var rf = tl("animationend"),
    of = tl("animationiteration"),
    sf = tl("animationstart"),
    Ny = tl("transitionrun"),
    My = tl("transitionstart"),
    _y = tl("transitioncancel"),
    ff = tl("transitionend"),
    df = new Map(),
    Mc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Mc.push("scrollEnd");
  function Ze(t, e) {
    (df.set(t, e), $n(e, [t]));
  }
  var _u =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ue = [],
    Nl = 0,
    _c = 0;
  function zu() {
    for (var t = Nl, e = (_c = Nl = 0); e < t; ) {
      var n = Ue[e];
      Ue[e++] = null;
      var l = Ue[e];
      Ue[e++] = null;
      var u = Ue[e];
      Ue[e++] = null;
      var c = Ue[e];
      if (((Ue[e++] = null), l !== null && u !== null)) {
        var d = l.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (l.pending = u));
      }
      c !== 0 && pf(n, u, c);
    }
  }
  function Bu(t, e, n, l) {
    ((Ue[Nl++] = t),
      (Ue[Nl++] = e),
      (Ue[Nl++] = n),
      (Ue[Nl++] = l),
      (_c |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function zc(t, e, n, l) {
    return (Bu(t, e, n, l), Uu(t));
  }
  function el(t, e) {
    return (Bu(t, null, null, e), Uu(t));
  }
  function pf(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, c = t.return; c !== null; )
      ((c.childLanes |= n),
        (l = c.alternate),
        l !== null && (l.childLanes |= n),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = c),
        (c = c.return));
    return t.tag === 3
      ? ((c = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - Ee(n)),
          (t = c.hiddenUpdates),
          (l = t[u]),
          l === null ? (t[u] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        c)
      : null;
  }
  function Uu(t) {
    if (50 < Xa) throw ((Xa = 0), (jr = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ml = {};
  function zy(t, e, n, l) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ae(t, e, n, l) {
    return new zy(t, e, n, l);
  }
  function Bc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function an(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ae(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function mf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Hu(t, e, n, l, u, c) {
    var d = 0;
    if (((l = t), typeof t == "function")) Bc(t) && (d = 1);
    else if (typeof t == "string")
      d = Lv(t, n, K.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Ht:
          return (
            (t = Ae(31, n, e, u)),
            (t.elementType = Ht),
            (t.lanes = c),
            t
          );
        case H:
          return nl(n.children, u, c, e);
        case B:
          ((d = 8), (u |= 24));
          break;
        case Y:
          return (
            (t = Ae(12, n, e, u | 2)),
            (t.elementType = Y),
            (t.lanes = c),
            t
          );
        case W:
          return ((t = Ae(13, n, e, u)), (t.elementType = W), (t.lanes = c), t);
        case F:
          return ((t = Ae(19, n, e, u)), (t.elementType = F), (t.lanes = c), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case I:
                d = 10;
                break t;
              case V:
                d = 9;
                break t;
              case Q:
                d = 11;
                break t;
              case Z:
                d = 14;
                break t;
              case it:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (l = null));
      }
    return (
      (e = Ae(d, n, e, u)),
      (e.elementType = t),
      (e.type = l),
      (e.lanes = c),
      e
    );
  }
  function nl(t, e, n, l) {
    return ((t = Ae(7, t, l, e)), (t.lanes = n), t);
  }
  function Uc(t, e, n) {
    return ((t = Ae(6, t, null, e)), (t.lanes = n), t);
  }
  function gf(t) {
    var e = Ae(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Hc(t, e, n) {
    return (
      (e = Ae(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var hf = new WeakMap();
  function He(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = hf.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: ms(e) }), hf.set(t, e), e);
    }
    return { value: t, source: e, stack: ms(e) };
  }
  var _l = [],
    zl = 0,
    Gu = null,
    Da = 0,
    Ge = [],
    Le = 0,
    Tn = null,
    We = 1,
    Fe = "";
  function un(t, e) {
    ((_l[zl++] = Da), (_l[zl++] = Gu), (Gu = t), (Da = e));
  }
  function yf(t, e, n) {
    ((Ge[Le++] = We), (Ge[Le++] = Fe), (Ge[Le++] = Tn), (Tn = t));
    var l = We;
    t = Fe;
    var u = 32 - Ee(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var c = 32 - Ee(e) + u;
    if (30 < c) {
      var d = u - (u % 5);
      ((c = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (u -= d),
        (We = (1 << (32 - Ee(e) + u)) | (n << u) | l),
        (Fe = c + t));
    } else ((We = (1 << c) | (n << u) | l), (Fe = t));
  }
  function Gc(t) {
    t.return !== null && (un(t, 1), yf(t, 1, 0));
  }
  function Lc(t) {
    for (; t === Gu; )
      ((Gu = _l[--zl]), (_l[zl] = null), (Da = _l[--zl]), (_l[zl] = null));
    for (; t === Tn; )
      ((Tn = Ge[--Le]),
        (Ge[Le] = null),
        (Fe = Ge[--Le]),
        (Ge[Le] = null),
        (We = Ge[--Le]),
        (Ge[Le] = null));
  }
  function vf(t, e) {
    ((Ge[Le++] = We),
      (Ge[Le++] = Fe),
      (Ge[Le++] = Tn),
      (We = e.id),
      (Fe = e.overflow),
      (Tn = t));
  }
  var ee = null,
    Gt = null,
    ht = !1,
    On = null,
    we = !1,
    wc = Error(o(519));
  function xn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Aa(He(e, t)), wc);
  }
  function bf(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[te] = t), (e[de] = l), n)) {
      case "dialog":
        (dt("cancel", e), dt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Za.length; n++) dt(Za[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (dt("error", e), dt("load", e));
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        (dt("invalid", e),
          _s(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        (dt("invalid", e), Bs(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Gp(e.textContent, n)
        ? (l.popover != null && (dt("beforetoggle", e), dt("toggle", e)),
          l.onScroll != null && dt("scroll", e),
          l.onScrollEnd != null && dt("scrollend", e),
          l.onClick != null && (e.onclick = nn),
          (e = !0))
        : (e = !1),
      e || xn(t, !0));
  }
  function Sf(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          we = !1;
          return;
        case 27:
        case 3:
          we = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function Bl(t) {
    if (t !== ee) return !1;
    if (!ht) return (Sf(t), (ht = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || no(t.type, t.memoizedProps))),
        (n = !n)),
      n && Gt && xn(t),
      Sf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Gt = Zp(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Gt = Zp(t);
    } else
      e === 27
        ? ((e = Gt), Yn(t.type) ? ((t = co), (co = null), (Gt = t)) : (Gt = e))
        : (Gt = ee ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ll() {
    ((Gt = ee = null), (ht = !1));
  }
  function qc() {
    var t = On;
    return (
      t !== null &&
        (ye === null ? (ye = t) : ye.push.apply(ye, t), (On = null)),
      t
    );
  }
  function Aa(t) {
    On === null ? (On = [t]) : On.push(t);
  }
  var Yc = T(null),
    al = null,
    cn = null;
  function Cn(t, e, n) {
    (j(Yc, e._currentValue), (e._currentValue = n));
  }
  function rn(t) {
    ((t._currentValue = Yc.current), G(Yc));
  }
  function jc(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Vc(t, e, n, l) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var d = u.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var h = c;
          c = u;
          for (var E = 0; E < e.length; E++)
            if (h.context === e[E]) {
              ((c.lanes |= n),
                (h = c.alternate),
                h !== null && (h.lanes |= n),
                jc(c.return, n, t),
                l || (d = null));
              break t;
            }
          c = h.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(o(341));
        ((d.lanes |= n),
          (c = d.alternate),
          c !== null && (c.lanes |= n),
          jc(d, n, t),
          (d = null));
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Ul(t, e, n, l) {
    t = null;
    for (var u = e, c = !1; u !== null; ) {
      if (!c) {
        if ((u.flags & 524288) !== 0) c = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(o(387));
        if (((d = d.memoizedProps), d !== null)) {
          var h = u.type;
          De(u.pendingProps.value, d.value) ||
            (t !== null ? t.push(h) : (t = [h]));
        }
      } else if (u === St.current) {
        if (((d = u.alternate), d === null)) throw Error(o(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Fa) : (t = [Fa]));
      }
      u = u.return;
    }
    (t !== null && Vc(e, t, n, l), (e.flags |= 262144));
  }
  function Lu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!De(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ul(t) {
    ((al = t),
      (cn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ne(t) {
    return Ef(al, t);
  }
  function wu(t, e) {
    return (al === null && ul(t), Ef(t, e));
  }
  function Ef(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), cn === null)) {
      if (t === null) throw Error(o(308));
      ((cn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else cn = cn.next = e;
    return n;
  }
  var By =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Uy = a.unstable_scheduleCallback,
    Hy = a.unstable_NormalPriority,
    Qt = {
      $$typeof: I,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xc() {
    return { controller: new By(), data: new Map(), refCount: 0 };
  }
  function Ta(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Uy(Hy, function () {
          t.controller.abort();
        }));
  }
  var Oa = null,
    Qc = 0,
    Hl = 0,
    Gl = null;
  function Gy(t, e) {
    if (Oa === null) {
      var n = (Oa = []);
      ((Qc = 0),
        (Hl = Kr()),
        (Gl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Qc++, e.then(Df, Df), e);
  }
  function Df() {
    if (--Qc === 0 && Oa !== null) {
      Gl !== null && (Gl.status = "fulfilled");
      var t = Oa;
      ((Oa = null), (Hl = 0), (Gl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Ly(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var u = 0; u < n.length; u++) (0, n[u])(e);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        },
      ),
      l
    );
  }
  var Af = M.S;
  M.S = function (t, e) {
    ((ip = be()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Gy(t, e),
      Af !== null && Af(t, e));
  };
  var il = T(null);
  function Zc() {
    var t = il.current;
    return t !== null ? t : Bt.pooledCache;
  }
  function qu(t, e) {
    e === null ? j(il, il.current) : j(il, e.pool);
  }
  function Tf() {
    var t = Zc();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Ll = Error(o(460)),
    Ic = Error(o(474)),
    Yu = Error(o(542)),
    ju = { then: function () {} };
  function Of(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function xf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(nn, nn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Rf(t), t);
      default:
        if (typeof e.status == "string") e.then(nn, nn);
        else {
          if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Rf(t), t);
        }
        throw ((rl = e), Ll);
    }
  }
  function cl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((rl = n), Ll)
        : n;
    }
  }
  var rl = null;
  function Cf() {
    if (rl === null) throw Error(o(459));
    var t = rl;
    return ((rl = null), t);
  }
  function Rf(t) {
    if (t === Ll || t === Yu) throw Error(o(483));
  }
  var wl = null,
    xa = 0;
  function Vu(t) {
    var e = xa;
    return ((xa += 1), wl === null && (wl = []), xf(wl, t, e));
  }
  function Ca(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Xu(t, e) {
    throw e.$$typeof === b
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Nf(t) {
    function e(O, D) {
      if (t) {
        var x = O.deletions;
        x === null ? ((O.deletions = [D]), (O.flags |= 16)) : x.push(D);
      }
    }
    function n(O, D) {
      if (!t) return null;
      for (; D !== null; ) (e(O, D), (D = D.sibling));
      return null;
    }
    function l(O) {
      for (var D = new Map(); O !== null; )
        (O.key !== null ? D.set(O.key, O) : D.set(O.index, O), (O = O.sibling));
      return D;
    }
    function u(O, D) {
      return ((O = an(O, D)), (O.index = 0), (O.sibling = null), O);
    }
    function c(O, D, x) {
      return (
        (O.index = x),
        t
          ? ((x = O.alternate),
            x !== null
              ? ((x = x.index), x < D ? ((O.flags |= 67108866), D) : x)
              : ((O.flags |= 67108866), D))
          : ((O.flags |= 1048576), D)
      );
    }
    function d(O) {
      return (t && O.alternate === null && (O.flags |= 67108866), O);
    }
    function h(O, D, x, U) {
      return D === null || D.tag !== 6
        ? ((D = Uc(x, O.mode, U)), (D.return = O), D)
        : ((D = u(D, x)), (D.return = O), D);
    }
    function E(O, D, x, U) {
      var tt = x.type;
      return tt === H
        ? z(O, D, x.props.children, U, x.key)
        : D !== null &&
            (D.elementType === tt ||
              (typeof tt == "object" &&
                tt !== null &&
                tt.$$typeof === it &&
                cl(tt) === D.type))
          ? ((D = u(D, x.props)), Ca(D, x), (D.return = O), D)
          : ((D = Hu(x.type, x.key, x.props, null, O.mode, U)),
            Ca(D, x),
            (D.return = O),
            D);
    }
    function C(O, D, x, U) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== x.containerInfo ||
        D.stateNode.implementation !== x.implementation
        ? ((D = Hc(x, O.mode, U)), (D.return = O), D)
        : ((D = u(D, x.children || [])), (D.return = O), D);
    }
    function z(O, D, x, U, tt) {
      return D === null || D.tag !== 7
        ? ((D = nl(x, O.mode, U, tt)), (D.return = O), D)
        : ((D = u(D, x)), (D.return = O), D);
    }
    function L(O, D, x) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = Uc("" + D, O.mode, x)), (D.return = O), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case A:
            return (
              (x = Hu(D.type, D.key, D.props, null, O.mode, x)),
              Ca(x, D),
              (x.return = O),
              x
            );
          case _:
            return ((D = Hc(D, O.mode, x)), (D.return = O), D);
          case it:
            return ((D = cl(D)), L(O, D, x));
        }
        if (gt(D) || Ot(D))
          return ((D = nl(D, O.mode, x, null)), (D.return = O), D);
        if (typeof D.then == "function") return L(O, Vu(D), x);
        if (D.$$typeof === I) return L(O, wu(O, D), x);
        Xu(O, D);
      }
      return null;
    }
    function R(O, D, x, U) {
      var tt = D !== null ? D.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return tt !== null ? null : h(O, D, "" + x, U);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case A:
            return x.key === tt ? E(O, D, x, U) : null;
          case _:
            return x.key === tt ? C(O, D, x, U) : null;
          case it:
            return ((x = cl(x)), R(O, D, x, U));
        }
        if (gt(x) || Ot(x)) return tt !== null ? null : z(O, D, x, U, null);
        if (typeof x.then == "function") return R(O, D, Vu(x), U);
        if (x.$$typeof === I) return R(O, D, wu(O, x), U);
        Xu(O, x);
      }
      return null;
    }
    function N(O, D, x, U, tt) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return ((O = O.get(x) || null), h(D, O, "" + U, tt));
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case A:
            return (
              (O = O.get(U.key === null ? x : U.key) || null),
              E(D, O, U, tt)
            );
          case _:
            return (
              (O = O.get(U.key === null ? x : U.key) || null),
              C(D, O, U, tt)
            );
          case it:
            return ((U = cl(U)), N(O, D, x, U, tt));
        }
        if (gt(U) || Ot(U))
          return ((O = O.get(x) || null), z(D, O, U, tt, null));
        if (typeof U.then == "function") return N(O, D, x, Vu(U), tt);
        if (U.$$typeof === I) return N(O, D, x, wu(D, U), tt);
        Xu(D, U);
      }
      return null;
    }
    function J(O, D, x, U) {
      for (
        var tt = null, Dt = null, $ = D, ot = (D = 0), mt = null;
        $ !== null && ot < x.length;
        ot++
      ) {
        $.index > ot ? ((mt = $), ($ = null)) : (mt = $.sibling);
        var At = R(O, $, x[ot], U);
        if (At === null) {
          $ === null && ($ = mt);
          break;
        }
        (t && $ && At.alternate === null && e(O, $),
          (D = c(At, D, ot)),
          Dt === null ? (tt = At) : (Dt.sibling = At),
          (Dt = At),
          ($ = mt));
      }
      if (ot === x.length) return (n(O, $), ht && un(O, ot), tt);
      if ($ === null) {
        for (; ot < x.length; ot++)
          (($ = L(O, x[ot], U)),
            $ !== null &&
              ((D = c($, D, ot)),
              Dt === null ? (tt = $) : (Dt.sibling = $),
              (Dt = $)));
        return (ht && un(O, ot), tt);
      }
      for ($ = l($); ot < x.length; ot++)
        ((mt = N($, O, ot, x[ot], U)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              $.delete(mt.key === null ? ot : mt.key),
            (D = c(mt, D, ot)),
            Dt === null ? (tt = mt) : (Dt.sibling = mt),
            (Dt = mt)));
      return (
        t &&
          $.forEach(function (Zn) {
            return e(O, Zn);
          }),
        ht && un(O, ot),
        tt
      );
    }
    function et(O, D, x, U) {
      if (x == null) throw Error(o(151));
      for (
        var tt = null, Dt = null, $ = D, ot = (D = 0), mt = null, At = x.next();
        $ !== null && !At.done;
        ot++, At = x.next()
      ) {
        $.index > ot ? ((mt = $), ($ = null)) : (mt = $.sibling);
        var Zn = R(O, $, At.value, U);
        if (Zn === null) {
          $ === null && ($ = mt);
          break;
        }
        (t && $ && Zn.alternate === null && e(O, $),
          (D = c(Zn, D, ot)),
          Dt === null ? (tt = Zn) : (Dt.sibling = Zn),
          (Dt = Zn),
          ($ = mt));
      }
      if (At.done) return (n(O, $), ht && un(O, ot), tt);
      if ($ === null) {
        for (; !At.done; ot++, At = x.next())
          ((At = L(O, At.value, U)),
            At !== null &&
              ((D = c(At, D, ot)),
              Dt === null ? (tt = At) : (Dt.sibling = At),
              (Dt = At)));
        return (ht && un(O, ot), tt);
      }
      for ($ = l($); !At.done; ot++, At = x.next())
        ((At = N($, O, ot, At.value, U)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              $.delete(At.key === null ? ot : At.key),
            (D = c(At, D, ot)),
            Dt === null ? (tt = At) : (Dt.sibling = At),
            (Dt = At)));
      return (
        t &&
          $.forEach(function (Jv) {
            return e(O, Jv);
          }),
        ht && un(O, ot),
        tt
      );
    }
    function zt(O, D, x, U) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === H &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case A:
            t: {
              for (var tt = x.key; D !== null; ) {
                if (D.key === tt) {
                  if (((tt = x.type), tt === H)) {
                    if (D.tag === 7) {
                      (n(O, D.sibling),
                        (U = u(D, x.props.children)),
                        (U.return = O),
                        (O = U));
                      break t;
                    }
                  } else if (
                    D.elementType === tt ||
                    (typeof tt == "object" &&
                      tt !== null &&
                      tt.$$typeof === it &&
                      cl(tt) === D.type)
                  ) {
                    (n(O, D.sibling),
                      (U = u(D, x.props)),
                      Ca(U, x),
                      (U.return = O),
                      (O = U));
                    break t;
                  }
                  n(O, D);
                  break;
                } else e(O, D);
                D = D.sibling;
              }
              x.type === H
                ? ((U = nl(x.props.children, O.mode, U, x.key)),
                  (U.return = O),
                  (O = U))
                : ((U = Hu(x.type, x.key, x.props, null, O.mode, U)),
                  Ca(U, x),
                  (U.return = O),
                  (O = U));
            }
            return d(O);
          case _:
            t: {
              for (tt = x.key; D !== null; ) {
                if (D.key === tt)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === x.containerInfo &&
                    D.stateNode.implementation === x.implementation
                  ) {
                    (n(O, D.sibling),
                      (U = u(D, x.children || [])),
                      (U.return = O),
                      (O = U));
                    break t;
                  } else {
                    n(O, D);
                    break;
                  }
                else e(O, D);
                D = D.sibling;
              }
              ((U = Hc(x, O.mode, U)), (U.return = O), (O = U));
            }
            return d(O);
          case it:
            return ((x = cl(x)), zt(O, D, x, U));
        }
        if (gt(x)) return J(O, D, x, U);
        if (Ot(x)) {
          if (((tt = Ot(x)), typeof tt != "function")) throw Error(o(150));
          return ((x = tt.call(x)), et(O, D, x, U));
        }
        if (typeof x.then == "function") return zt(O, D, Vu(x), U);
        if (x.$$typeof === I) return zt(O, D, wu(O, x), U);
        Xu(O, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          D !== null && D.tag === 6
            ? (n(O, D.sibling), (U = u(D, x)), (U.return = O), (O = U))
            : (n(O, D), (U = Uc(x, O.mode, U)), (U.return = O), (O = U)),
          d(O))
        : n(O, D);
    }
    return function (O, D, x, U) {
      try {
        xa = 0;
        var tt = zt(O, D, x, U);
        return ((wl = null), tt);
      } catch ($) {
        if ($ === Ll || $ === Yu) throw $;
        var Dt = Ae(29, $, null, O.mode);
        return ((Dt.lanes = U), (Dt.return = O), Dt);
      }
    };
  }
  var ol = Nf(!0),
    Mf = Nf(!1),
    Rn = !1;
  function Kc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Tt & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (l.pending = e),
        (e = Uu(t)),
        pf(t, null, n),
        e
      );
    }
    return (Bu(t, l, e, n), Uu(t));
  }
  function Ra(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Ss(t, n));
    }
  }
  function Wc(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (u = c = d) : (c = c.next = d), (n = n.next));
        } while (n !== null);
        c === null ? (u = c = e) : (c = c.next = e);
      } else u = c = e;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var Fc = !1;
  function Na() {
    if (Fc) {
      var t = Gl;
      if (t !== null) throw t;
    }
  }
  function Ma(t, e, n, l) {
    Fc = !1;
    var u = t.updateQueue;
    Rn = !1;
    var c = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      h = u.shared.pending;
    if (h !== null) {
      u.shared.pending = null;
      var E = h,
        C = E.next;
      ((E.next = null), d === null ? (c = C) : (d.next = C), (d = E));
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (h = z.lastBaseUpdate),
        h !== d &&
          (h === null ? (z.firstBaseUpdate = C) : (h.next = C),
          (z.lastBaseUpdate = E)));
    }
    if (c !== null) {
      var L = u.baseState;
      ((d = 0), (z = C = E = null), (h = c));
      do {
        var R = h.lane & -536870913,
          N = R !== h.lane;
        if (N ? (pt & R) === R : (l & R) === R) {
          (R !== 0 && R === Hl && (Fc = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: h.tag,
                  payload: h.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var J = t,
              et = h;
            R = e;
            var zt = n;
            switch (et.tag) {
              case 1:
                if (((J = et.payload), typeof J == "function")) {
                  L = J.call(zt, L, R);
                  break t;
                }
                L = J;
                break t;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = et.payload),
                  (R = typeof J == "function" ? J.call(zt, L, R) : J),
                  R == null)
                )
                  break t;
                L = v({}, L, R);
                break t;
              case 2:
                Rn = !0;
            }
          }
          ((R = h.callback),
            R !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = u.callbacks),
              N === null ? (u.callbacks = [R]) : N.push(R)));
        } else
          ((N = {
            lane: R,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            z === null ? ((C = z = N), (E = L)) : (z = z.next = N),
            (d |= R));
        if (((h = h.next), h === null)) {
          if (((h = u.shared.pending), h === null)) break;
          ((N = h),
            (h = N.next),
            (N.next = null),
            (u.lastBaseUpdate = N),
            (u.shared.pending = null));
        }
      } while (!0);
      (z === null && (E = L),
        (u.baseState = E),
        (u.firstBaseUpdate = C),
        (u.lastBaseUpdate = z),
        c === null && (u.shared.lanes = 0),
        (Hn |= d),
        (t.lanes = d),
        (t.memoizedState = L));
    }
  }
  function _f(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function zf(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) _f(n[t], e);
  }
  var ql = T(null),
    Qu = T(0);
  function Bf(t, e) {
    ((t = yn), j(Qu, t), j(ql, e), (yn = t | e.baseLanes));
  }
  function $c() {
    (j(Qu, yn), j(ql, ql.current));
  }
  function kc() {
    ((yn = Qu.current), G(ql), G(Qu));
  }
  var Te = T(null),
    qe = null;
  function _n(t) {
    var e = t.alternate;
    (j(jt, jt.current & 1),
      j(Te, t),
      qe === null &&
        (e === null || ql.current !== null || e.memoizedState !== null) &&
        (qe = t));
  }
  function Pc(t) {
    (j(jt, jt.current), j(Te, t), qe === null && (qe = t));
  }
  function Uf(t) {
    t.tag === 22
      ? (j(jt, jt.current), j(Te, t), qe === null && (qe = t))
      : zn();
  }
  function zn() {
    (j(jt, jt.current), j(Te, Te.current));
  }
  function Oe(t) {
    (G(Te), qe === t && (qe = null), G(jt));
  }
  var jt = T(0);
  function Zu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || uo(n) || io(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var on = 0,
    ct = null,
    Mt = null,
    Zt = null,
    Iu = !1,
    Yl = !1,
    sl = !1,
    Ku = 0,
    _a = 0,
    jl = null,
    wy = 0;
  function qt() {
    throw Error(o(321));
  }
  function tr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!De(t[n], e[n])) return !1;
    return !0;
  }
  function er(t, e, n, l, u, c) {
    return (
      (on = c),
      (ct = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (M.H = t === null || t.memoizedState === null ? yd : hr),
      (sl = !1),
      (c = n(l, u)),
      (sl = !1),
      Yl && (c = Gf(e, n, l, u)),
      Hf(t),
      c
    );
  }
  function Hf(t) {
    M.H = Ua;
    var e = Mt !== null && Mt.next !== null;
    if (((on = 0), (Zt = Mt = ct = null), (Iu = !1), (_a = 0), (jl = null), e))
      throw Error(o(300));
    t === null ||
      It ||
      ((t = t.dependencies), t !== null && Lu(t) && (It = !0));
  }
  function Gf(t, e, n, l) {
    ct = t;
    var u = 0;
    do {
      if ((Yl && (jl = null), (_a = 0), (Yl = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (Zt = Mt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((M.H = vd), (c = e(n, l)));
    } while (Yl);
    return c;
  }
  function qy() {
    var t = M.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? za(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (ct.flags |= 1024),
      e
    );
  }
  function nr() {
    var t = Ku !== 0;
    return ((Ku = 0), t);
  }
  function lr(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function ar(t) {
    if (Iu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Iu = !1;
    }
    ((on = 0), (Zt = Mt = ct = null), (Yl = !1), (_a = Ku = 0), (jl = null));
  }
  function oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Zt === null ? (ct.memoizedState = Zt = t) : (Zt = Zt.next = t), Zt);
  }
  function Vt() {
    if (Mt === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Zt === null ? ct.memoizedState : Zt.next;
    if (e !== null) ((Zt = e), (Mt = t));
    else {
      if (t === null)
        throw ct.alternate === null ? Error(o(467)) : Error(o(310));
      ((Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Zt === null ? (ct.memoizedState = Zt = t) : (Zt = Zt.next = t));
    }
    return Zt;
  }
  function Ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function za(t) {
    var e = _a;
    return (
      (_a += 1),
      jl === null && (jl = []),
      (t = xf(jl, t, e)),
      (e = ct),
      (Zt === null ? e.memoizedState : Zt.next) === null &&
        ((e = e.alternate),
        (M.H = e === null || e.memoizedState === null ? yd : hr)),
      t
    );
  }
  function Wu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return za(t);
      if (t.$$typeof === I) return ne(t);
    }
    throw Error(o(438, String(t)));
  }
  function ur(t) {
    var e = null,
      n = ct.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ct.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Ju()), (ct.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = yt;
    return (e.index++, n);
  }
  function sn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Fu(t) {
    var e = Vt();
    return ir(e, Mt, t);
  }
  function ir(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var u = t.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = c.next), (c.next = d));
      }
      ((e.baseQueue = u = c), (l.pending = null));
    }
    if (((c = t.baseState), u === null)) t.memoizedState = c;
    else {
      e = u.next;
      var h = (d = null),
        E = null,
        C = e,
        z = !1;
      do {
        var L = C.lane & -536870913;
        if (L !== C.lane ? (pt & L) === L : (on & L) === L) {
          var R = C.revertLane;
          if (R === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              L === Hl && (z = !0));
          else if ((on & R) === R) {
            ((C = C.next), R === Hl && (z = !0));
            continue;
          } else
            ((L = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              E === null ? ((h = E = L), (d = c)) : (E = E.next = L),
              (ct.lanes |= R),
              (Hn |= R));
          ((L = C.action),
            sl && n(c, L),
            (c = C.hasEagerState ? C.eagerState : n(c, L)));
        } else
          ((R = {
            lane: L,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            E === null ? ((h = E = R), (d = c)) : (E = E.next = R),
            (ct.lanes |= L),
            (Hn |= L));
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (E === null ? (d = c) : (E.next = h),
        !De(c, t.memoizedState) && ((It = !0), z && ((n = Gl), n !== null)))
      )
        throw n;
      ((t.memoizedState = c),
        (t.baseState = d),
        (t.baseQueue = E),
        (l.lastRenderedState = c));
    }
    return (u === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function cr(t) {
    var e = Vt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      u = n.pending,
      c = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var d = (u = u.next);
      do ((c = t(c, d.action)), (d = d.next));
      while (d !== u);
      (De(c, e.memoizedState) || (It = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, l];
  }
  function Lf(t, e, n) {
    var l = ct,
      u = Vt(),
      c = ht;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var d = !De((Mt || u).memoizedState, n);
    if (
      (d && ((u.memoizedState = n), (It = !0)),
      (u = u.queue),
      sr(Yf.bind(null, l, u, t), [t]),
      u.getSnapshot !== e || d || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Vl(9, { destroy: void 0 }, qf.bind(null, l, u, n, e), null),
        Bt === null)
      )
        throw Error(o(349));
      c || (on & 127) !== 0 || wf(l, e, n);
    }
    return n;
  }
  function wf(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ct.updateQueue),
      e === null
        ? ((e = Ju()), (ct.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function qf(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), jf(e) && Vf(t));
  }
  function Yf(t, e, n) {
    return n(function () {
      jf(e) && Vf(t);
    });
  }
  function jf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !De(t, n);
    } catch {
      return !0;
    }
  }
  function Vf(t) {
    var e = el(t, 2);
    e !== null && ve(e, t, 2);
  }
  function rr(t) {
    var e = oe();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), sl)) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Xf(t, e, n, l) {
    return ((t.baseState = n), ir(t, Mt, typeof l == "function" ? l : sn));
  }
  function Yy(t, e, n, l, u) {
    if (Pu(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          c.listeners.push(d);
        },
      };
      (M.T !== null ? n(!0) : (c.isTransition = !1),
        l(c),
        (n = e.pending),
        n === null
          ? ((c.next = e.pending = c), Qf(e, c))
          : ((c.next = n.next), (e.pending = n.next = c)));
    }
  }
  function Qf(t, e) {
    var n = e.action,
      l = e.payload,
      u = t.state;
    if (e.isTransition) {
      var c = M.T,
        d = {};
      M.T = d;
      try {
        var h = n(u, l),
          E = M.S;
        (E !== null && E(d, h), Zf(t, e, h));
      } catch (C) {
        or(t, e, C);
      } finally {
        (c !== null && d.types !== null && (c.types = d.types), (M.T = c));
      }
    } else
      try {
        ((c = n(u, l)), Zf(t, e, c));
      } catch (C) {
        or(t, e, C);
      }
  }
  function Zf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            If(t, e, l);
          },
          function (l) {
            return or(t, e, l);
          },
        )
      : If(t, e, n);
  }
  function If(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Kf(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Qf(t, n))));
  }
  function or(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = n), Kf(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function Kf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Jf(t, e) {
    return e;
  }
  function Wf(t, e) {
    if (ht) {
      var n = Bt.formState;
      if (n !== null) {
        t: {
          var l = ct;
          if (ht) {
            if (Gt) {
              e: {
                for (var u = Gt, c = we; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break e;
                  }
                  if (((u = Ye(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((c = u.data), (u = c === "F!" || c === "F" ? u : null));
              }
              if (u) {
                ((Gt = Ye(u.nextSibling)), (l = u.data === "F!"));
                break t;
              }
            }
            xn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = oe()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jf,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = md.bind(null, ct, l)),
      (l.dispatch = n),
      (l = rr(!1)),
      (c = gr.bind(null, ct, !1, l.queue)),
      (l = oe()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = u),
      (n = Yy.bind(null, ct, u, c, n)),
      (u.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function Ff(t) {
    var e = Vt();
    return $f(e, Mt, t);
  }
  function $f(t, e, n) {
    if (
      ((e = ir(t, e, Jf)[0]),
      (t = Fu(sn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = za(e);
      } catch (d) {
        throw d === Ll ? Yu : d;
      }
    else l = e;
    e = Vt();
    var u = e.queue,
      c = u.dispatch;
    return (
      n !== e.memoizedState &&
        ((ct.flags |= 2048),
        Vl(9, { destroy: void 0 }, jy.bind(null, u, n), null)),
      [l, c, t]
    );
  }
  function jy(t, e) {
    t.action = e;
  }
  function kf(t) {
    var e = Vt(),
      n = Mt;
    if (n !== null) return $f(e, n, t);
    (Vt(), (e = e.memoizedState), (n = Vt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function Vl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = ct.updateQueue),
      e === null && ((e = Ju()), (ct.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function Pf() {
    return Vt().memoizedState;
  }
  function $u(t, e, n, l) {
    var u = oe();
    ((ct.flags |= t),
      (u.memoizedState = Vl(
        1 | e,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function ku(t, e, n, l) {
    var u = Vt();
    l = l === void 0 ? null : l;
    var c = u.memoizedState.inst;
    Mt !== null && l !== null && tr(l, Mt.memoizedState.deps)
      ? (u.memoizedState = Vl(e, c, n, l))
      : ((ct.flags |= t), (u.memoizedState = Vl(1 | e, c, n, l)));
  }
  function td(t, e) {
    $u(8390656, 8, t, e);
  }
  function sr(t, e) {
    ku(2048, 8, t, e);
  }
  function Vy(t) {
    ct.flags |= 4;
    var e = ct.updateQueue;
    if (e === null) ((e = Ju()), (ct.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function ed(t) {
    var e = Vt().memoizedState;
    return (
      Vy({ ref: e, nextImpl: t }),
      function () {
        if ((Tt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function nd(t, e) {
    return ku(4, 2, t, e);
  }
  function ld(t, e) {
    return ku(4, 4, t, e);
  }
  function ad(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ud(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ku(4, 4, ad.bind(null, e, t), n));
  }
  function fr() {}
  function id(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && tr(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function cd(t, e) {
    var n = Vt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && tr(e, l[1])) return l[0];
    if (((l = t()), sl)) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function dr(t, e, n) {
    return n === void 0 || ((on & 1073741824) !== 0 && (pt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = rp()), (ct.lanes |= t), (Hn |= t), n);
  }
  function rd(t, e, n, l) {
    return De(n, e)
      ? n
      : ql.current !== null
        ? ((t = dr(t, n, l)), De(t, e) || (It = !0), t)
        : (on & 42) === 0 || ((on & 1073741824) !== 0 && (pt & 261930) === 0)
          ? ((It = !0), (t.memoizedState = n))
          : ((t = rp()), (ct.lanes |= t), (Hn |= t), e);
  }
  function od(t, e, n, l, u) {
    var c = q.p;
    q.p = c !== 0 && 8 > c ? c : 8;
    var d = M.T,
      h = {};
    ((M.T = h), gr(t, !1, e, n));
    try {
      var E = u(),
        C = M.S;
      if (
        (C !== null && C(h, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var z = Ly(E, l);
        Ba(t, e, z, Re(t));
      } else Ba(t, e, l, Re(t));
    } catch (L) {
      Ba(t, e, { then: function () {}, status: "rejected", reason: L }, Re());
    } finally {
      ((q.p = c),
        d !== null && h.types !== null && (d.types = h.types),
        (M.T = d));
    }
  }
  function Xy() {}
  function pr(t, e, n, l) {
    if (t.tag !== 5) throw Error(o(476));
    var u = sd(t).queue;
    od(
      t,
      u,
      e,
      k,
      n === null
        ? Xy
        : function () {
            return (fd(t), n(l));
          },
    );
  }
  function sd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sn,
        lastRenderedState: k,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: sn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function fd(t) {
    var e = sd(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Ba(t, e.next.queue, {}, Re()));
  }
  function mr() {
    return ne(Fa);
  }
  function dd() {
    return Vt().memoizedState;
  }
  function pd() {
    return Vt().memoizedState;
  }
  function Qy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Re();
          t = Nn(n);
          var l = Mn(e, t, n);
          (l !== null && (ve(l, e, n), Ra(l, e, n)),
            (e = { cache: Xc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Zy(t, e, n) {
    var l = Re();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pu(t)
        ? gd(e, n)
        : ((n = zc(t, e, n, l)), n !== null && (ve(n, t, l), hd(n, e, l))));
  }
  function md(t, e, n) {
    var l = Re();
    Ba(t, e, n, l);
  }
  function Ba(t, e, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pu(t)) gd(e, u);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var d = e.lastRenderedState,
            h = c(d, n);
          if (((u.hasEagerState = !0), (u.eagerState = h), De(h, d)))
            return (Bu(t, e, u, 0), Bt === null && zu(), !1);
        } catch {}
      if (((n = zc(t, e, u, l)), n !== null))
        return (ve(n, t, l), hd(n, e, l), !0);
    }
    return !1;
  }
  function gr(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Kr(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pu(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = zc(t, n, l, 2)), e !== null && ve(e, t, 2));
  }
  function Pu(t) {
    var e = t.alternate;
    return t === ct || (e !== null && e === ct);
  }
  function gd(t, e) {
    Yl = Iu = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function hd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Ss(t, n));
    }
  }
  var Ua = {
    readContext: ne,
    use: Wu,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt,
  };
  Ua.useEffectEvent = qt;
  var yd = {
      readContext: ne,
      use: Wu,
      useCallback: function (t, e) {
        return ((oe().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ne,
      useEffect: td,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          $u(4194308, 4, ad.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return $u(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        $u(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = oe();
        e = e === void 0 ? null : e;
        var l = t();
        if (sl) {
          En(!0);
          try {
            t();
          } finally {
            En(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = oe();
        if (n !== void 0) {
          var u = n(e);
          if (sl) {
            En(!0);
            try {
              n(e);
            } finally {
              En(!1);
            }
          }
        } else u = e;
        return (
          (l.memoizedState = l.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (l.queue = t),
          (t = t.dispatch = Zy.bind(null, ct, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = oe();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = rr(t);
        var e = t.queue,
          n = md.bind(null, ct, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: fr,
      useDeferredValue: function (t, e) {
        var n = oe();
        return dr(n, t, e);
      },
      useTransition: function () {
        var t = rr(!1);
        return (
          (t = od.bind(null, ct, t.queue, !0, !1)),
          (oe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = ct,
          u = oe();
        if (ht) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Bt === null)) throw Error(o(349));
          (pt & 127) !== 0 || wf(l, e, n);
        }
        u.memoizedState = n;
        var c = { value: n, getSnapshot: e };
        return (
          (u.queue = c),
          td(Yf.bind(null, l, c, t), [t]),
          (l.flags |= 2048),
          Vl(9, { destroy: void 0 }, qf.bind(null, l, c, n, e), null),
          n
        );
      },
      useId: function () {
        var t = oe(),
          e = Bt.identifierPrefix;
        if (ht) {
          var n = Fe,
            l = We;
          ((n = (l & ~(1 << (32 - Ee(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = Ku++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = wy++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: mr,
      useFormState: Wf,
      useActionState: Wf,
      useOptimistic: function (t) {
        var e = oe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = gr.bind(null, ct, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ur,
      useCacheRefresh: function () {
        return (oe().memoizedState = Qy.bind(null, ct));
      },
      useEffectEvent: function (t) {
        var e = oe(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Tt & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    hr = {
      readContext: ne,
      use: Wu,
      useCallback: id,
      useContext: ne,
      useEffect: sr,
      useImperativeHandle: ud,
      useInsertionEffect: nd,
      useLayoutEffect: ld,
      useMemo: cd,
      useReducer: Fu,
      useRef: Pf,
      useState: function () {
        return Fu(sn);
      },
      useDebugValue: fr,
      useDeferredValue: function (t, e) {
        var n = Vt();
        return rd(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Fu(sn)[0],
          e = Vt().memoizedState;
        return [typeof t == "boolean" ? t : za(t), e];
      },
      useSyncExternalStore: Lf,
      useId: dd,
      useHostTransitionStatus: mr,
      useFormState: Ff,
      useActionState: Ff,
      useOptimistic: function (t, e) {
        var n = Vt();
        return Xf(n, Mt, t, e);
      },
      useMemoCache: ur,
      useCacheRefresh: pd,
    };
  hr.useEffectEvent = ed;
  var vd = {
    readContext: ne,
    use: Wu,
    useCallback: id,
    useContext: ne,
    useEffect: sr,
    useImperativeHandle: ud,
    useInsertionEffect: nd,
    useLayoutEffect: ld,
    useMemo: cd,
    useReducer: cr,
    useRef: Pf,
    useState: function () {
      return cr(sn);
    },
    useDebugValue: fr,
    useDeferredValue: function (t, e) {
      var n = Vt();
      return Mt === null ? dr(n, t, e) : rd(n, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = cr(sn)[0],
        e = Vt().memoizedState;
      return [typeof t == "boolean" ? t : za(t), e];
    },
    useSyncExternalStore: Lf,
    useId: dd,
    useHostTransitionStatus: mr,
    useFormState: kf,
    useActionState: kf,
    useOptimistic: function (t, e) {
      var n = Vt();
      return Mt !== null
        ? Xf(n, Mt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: ur,
    useCacheRefresh: pd,
  };
  vd.useEffectEvent = ed;
  function yr(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : v({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var vr = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = Re(),
        u = Nn(l);
      ((u.payload = e),
        n != null && (u.callback = n),
        (e = Mn(t, u, l)),
        e !== null && (ve(e, t, l), Ra(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = Re(),
        u = Nn(l);
      ((u.tag = 1),
        (u.payload = e),
        n != null && (u.callback = n),
        (e = Mn(t, u, l)),
        e !== null && (ve(e, t, l), Ra(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Re(),
        l = Nn(n);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = Mn(t, l, n)),
        e !== null && (ve(e, t, n), Ra(e, t, n)));
    },
  };
  function bd(t, e, n, l, u, c, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, c, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Sa(n, l) || !Sa(u, c)
          : !0
    );
  }
  function Sd(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && vr.enqueueReplaceState(e, e.state, null));
  }
  function fl(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = v({}, n));
      for (var u in t) n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function Ed(t) {
    _u(t);
  }
  function Dd(t) {
    console.error(t);
  }
  function Ad(t) {
    _u(t);
  }
  function ti(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Td(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function br(t, e, n) {
    return (
      (n = Nn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ti(t, e);
      }),
      n
    );
  }
  function Od(t) {
    return ((t = Nn(t)), (t.tag = 3), t);
  }
  function xd(t, e, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = l.value;
      ((t.payload = function () {
        return u(c);
      }),
        (t.callback = function () {
          Td(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (Td(e, n, l),
          typeof u != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this)));
        var h = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: h !== null ? h : "",
        });
      });
  }
  function Iy(t, e, n, l, u) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Ul(e, n, u, !0),
        (n = Te.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              qe === null ? di() : n.alternate === null && Yt === 0 && (Yt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              l === ju
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  Qr(t, l, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ju
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  Qr(t, l, u)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (Qr(t, l, u), di(), !1);
    }
    if (ht)
      return (
        (e = Te.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            l !== wc && ((t = Error(o(422), { cause: l })), Aa(He(t, n))))
          : (l !== wc && ((e = Error(o(423), { cause: l })), Aa(He(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (l = He(l, n)),
            (u = br(t.stateNode, l, u)),
            Wc(t, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var c = Error(o(520), { cause: l });
    if (
      ((c = He(c, n)),
      Va === null ? (Va = [c]) : Va.push(c),
      Yt !== 4 && (Yt = 2),
      e === null)
    )
      return !0;
    ((l = He(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = u & -u),
            (n.lanes |= t),
            (t = br(n.stateNode, l, t)),
            Wc(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Od(u)),
              xd(u, t, n, l),
              Wc(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Sr = Error(o(461)),
    It = !1;
  function le(t, e, n, l) {
    e.child = t === null ? Mf(e, null, n, l) : ol(e, t.child, n, l);
  }
  function Cd(t, e, n, l, u) {
    n = n.render;
    var c = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var h in l) h !== "ref" && (d[h] = l[h]);
    } else d = l;
    return (
      ul(e),
      (l = er(t, e, n, d, c, u)),
      (h = nr()),
      t !== null && !It
        ? (lr(t, e, u), fn(t, e, u))
        : (ht && h && Gc(e), (e.flags |= 1), le(t, e, l, u), e.child)
    );
  }
  function Rd(t, e, n, l, u) {
    if (t === null) {
      var c = n.type;
      return typeof c == "function" &&
        !Bc(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = c), Nd(t, e, c, l, u))
        : ((t = Hu(n.type, null, l, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Rr(t, u))) {
      var d = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Sa), n(d, l) && t.ref === e.ref)
      )
        return fn(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = an(c, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nd(t, e, n, l, u) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Sa(c, l) && t.ref === e.ref)
        if (((It = !1), (e.pendingProps = l = c), Rr(t, u)))
          (t.flags & 131072) !== 0 && (It = !0);
        else return ((e.lanes = t.lanes), fn(t, e, u));
    }
    return Er(t, e, n, l, u);
  }
  function Md(t, e, n, l) {
    var u = l.children,
      c = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, u = 0; l !== null; )
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~c;
        } else ((l = 0), (e.child = null));
        return _d(t, e, c, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && qu(e, c !== null ? c.cachePool : null),
          c !== null ? Bf(e, c) : $c(),
          Uf(e));
      else
        return (
          (l = e.lanes = 536870912),
          _d(t, e, c !== null ? c.baseLanes | n : n, n, l)
        );
    } else
      c !== null
        ? (qu(e, c.cachePool), Bf(e, c), zn(), (e.memoizedState = null))
        : (t !== null && qu(e, null), $c(), zn());
    return (le(t, e, u, n), e.child);
  }
  function Ha(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function _d(t, e, n, l, u) {
    var c = Zc();
    return (
      (c = c === null ? null : { parent: Qt._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: n, cachePool: c }),
      t !== null && qu(e, null),
      $c(),
      Uf(e),
      t !== null && Ul(t, e, l, !0),
      (e.childLanes = u),
      null
    );
  }
  function ei(t, e) {
    return (
      (e = li({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function zd(t, e, n) {
    return (
      ol(e, t.child, null, n),
      (t = ei(e, e.pendingProps)),
      (t.flags |= 2),
      Oe(e),
      (e.memoizedState = null),
      t
    );
  }
  function Ky(t, e, n) {
    var l = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ht) {
        if (l.mode === "hidden")
          return ((t = ei(e, l)), (e.lanes = 536870912), Ha(null, t));
        if (
          (Pc(e),
          (t = Gt)
            ? ((t = Qp(t, we)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Tn !== null ? { id: We, overflow: Fe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = gf(t)),
                (n.return = e),
                (e.child = n),
                (ee = e),
                (Gt = null)))
            : (t = null),
          t === null)
        )
          throw xn(e);
        return ((e.lanes = 536870912), null);
      }
      return ei(e, l);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var d = c.dehydrated;
      if ((Pc(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = zd(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if (
        (It || Ul(t, e, n, !1), (u = (n & t.childLanes) !== 0), It || u)
      ) {
        if (
          ((l = Bt),
          l !== null && ((d = Es(l, n)), d !== 0 && d !== c.retryLane))
        )
          throw ((c.retryLane = d), el(t, d), ve(l, t, d), Sr);
        (di(), (e = zd(t, e, n)));
      } else
        ((t = c.treeContext),
          (Gt = Ye(d.nextSibling)),
          (ee = e),
          (ht = !0),
          (On = null),
          (we = !1),
          t !== null && vf(e, t),
          (e = ei(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = an(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ni(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Er(t, e, n, l, u) {
    return (
      ul(e),
      (n = er(t, e, n, l, void 0, u)),
      (l = nr()),
      t !== null && !It
        ? (lr(t, e, u), fn(t, e, u))
        : (ht && l && Gc(e), (e.flags |= 1), le(t, e, n, u), e.child)
    );
  }
  function Bd(t, e, n, l, u, c) {
    return (
      ul(e),
      (e.updateQueue = null),
      (n = Gf(e, l, n, u)),
      Hf(t),
      (l = nr()),
      t !== null && !It
        ? (lr(t, e, c), fn(t, e, c))
        : (ht && l && Gc(e), (e.flags |= 1), le(t, e, n, c), e.child)
    );
  }
  function Ud(t, e, n, l, u) {
    if ((ul(e), e.stateNode === null)) {
      var c = Ml,
        d = n.contextType;
      (typeof d == "object" && d !== null && (c = ne(d)),
        (c = new n(l, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = vr),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = l),
        (c.state = e.memoizedState),
        (c.refs = {}),
        Kc(e),
        (d = n.contextType),
        (c.context = typeof d == "object" && d !== null ? ne(d) : Ml),
        (c.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (yr(e, n, d, l), (c.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((d = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          d !== c.state && vr.enqueueReplaceState(c, c.state, null),
          Ma(e, l, c, u),
          Na(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      c = e.stateNode;
      var h = e.memoizedProps,
        E = fl(n, h);
      c.props = E;
      var C = c.context,
        z = n.contextType;
      ((d = Ml), typeof z == "object" && z !== null && (d = ne(z)));
      var L = n.getDerivedStateFromProps;
      ((z =
        typeof L == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (h = e.pendingProps !== h),
        z ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((h || C !== d) && Sd(e, c, l, d)),
        (Rn = !1));
      var R = e.memoizedState;
      ((c.state = R),
        Ma(e, l, c, u),
        Na(),
        (C = e.memoizedState),
        h || R !== C || Rn
          ? (typeof L == "function" && (yr(e, n, L, l), (C = e.memoizedState)),
            (E = Rn || bd(e, n, E, l, R, C, d))
              ? (z ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = C)),
            (c.props = l),
            (c.state = C),
            (c.context = d),
            (l = E))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1)));
    } else {
      ((c = e.stateNode),
        Jc(t, e),
        (d = e.memoizedProps),
        (z = fl(n, d)),
        (c.props = z),
        (L = e.pendingProps),
        (R = c.context),
        (C = n.contextType),
        (E = Ml),
        typeof C == "object" && C !== null && (E = ne(C)),
        (h = n.getDerivedStateFromProps),
        (C =
          typeof h == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((d !== L || R !== E) && Sd(e, c, l, E)),
        (Rn = !1),
        (R = e.memoizedState),
        (c.state = R),
        Ma(e, l, c, u),
        Na());
      var N = e.memoizedState;
      d !== L ||
      R !== N ||
      Rn ||
      (t !== null && t.dependencies !== null && Lu(t.dependencies))
        ? (typeof h == "function" && (yr(e, n, h, l), (N = e.memoizedState)),
          (z =
            Rn ||
            bd(e, n, z, l, R, N, E) ||
            (t !== null && t.dependencies !== null && Lu(t.dependencies)))
            ? (C ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(l, N, E),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(l, N, E)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && R === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = N)),
          (c.props = l),
          (c.state = N),
          (c.context = E),
          (l = z))
        : (typeof c.componentDidUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && R === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      ni(t, e),
      (l = (e.flags & 128) !== 0),
      c || l
        ? ((c = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = ol(e, t.child, null, u)),
              (e.child = ol(e, null, n, u)))
            : le(t, e, n, u),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = fn(t, e, u)),
      t
    );
  }
  function Hd(t, e, n, l) {
    return (ll(), (e.flags |= 256), le(t, e, n, l), e.child);
  }
  var Dr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ar(t) {
    return { baseLanes: t, cachePool: Tf() };
  }
  function Tr(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ce), t);
  }
  function Gd(t, e, n) {
    var l = e.pendingProps,
      u = !1,
      c = (e.flags & 128) !== 0,
      d;
    if (
      ((d = c) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (jt.current & 2) !== 0),
      d && ((u = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ht) {
        if (
          (u ? _n(e) : zn(),
          (t = Gt)
            ? ((t = Qp(t, we)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Tn !== null ? { id: We, overflow: Fe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = gf(t)),
                (n.return = e),
                (e.child = n),
                (ee = e),
                (Gt = null)))
            : (t = null),
          t === null)
        )
          throw xn(e);
        return (io(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var h = l.children;
      return (
        (l = l.fallback),
        u
          ? (zn(),
            (u = e.mode),
            (h = li({ mode: "hidden", children: h }, u)),
            (l = nl(l, u, n, null)),
            (h.return = e),
            (l.return = e),
            (h.sibling = l),
            (e.child = h),
            (l = e.child),
            (l.memoizedState = Ar(n)),
            (l.childLanes = Tr(t, d, n)),
            (e.memoizedState = Dr),
            Ha(null, l))
          : (_n(e), Or(e, h))
      );
    }
    var E = t.memoizedState;
    if (E !== null && ((h = E.dehydrated), h !== null)) {
      if (c)
        e.flags & 256
          ? (_n(e), (e.flags &= -257), (e = xr(t, e, n)))
          : e.memoizedState !== null
            ? (zn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (zn(),
              (h = l.fallback),
              (u = e.mode),
              (l = li({ mode: "visible", children: l.children }, u)),
              (h = nl(h, u, n, null)),
              (h.flags |= 2),
              (l.return = e),
              (h.return = e),
              (l.sibling = h),
              (e.child = l),
              ol(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Ar(n)),
              (l.childLanes = Tr(t, d, n)),
              (e.memoizedState = Dr),
              (e = Ha(null, l)));
      else if ((_n(e), io(h))) {
        if (((d = h.nextSibling && h.nextSibling.dataset), d)) var C = d.dgst;
        ((d = C),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = d),
          Aa({ value: l, source: null, stack: null }),
          (e = xr(t, e, n)));
      } else if (
        (It || Ul(t, e, n, !1), (d = (n & t.childLanes) !== 0), It || d)
      ) {
        if (
          ((d = Bt),
          d !== null && ((l = Es(d, n)), l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), el(t, l), ve(d, t, l), Sr);
        (uo(h) || di(), (e = xr(t, e, n)));
      } else
        uo(h)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            (Gt = Ye(h.nextSibling)),
            (ee = e),
            (ht = !0),
            (On = null),
            (we = !1),
            t !== null && vf(e, t),
            (e = Or(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (zn(),
        (h = l.fallback),
        (u = e.mode),
        (E = t.child),
        (C = E.sibling),
        (l = an(E, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        C !== null ? (h = an(C, h)) : ((h = nl(h, u, n, null)), (h.flags |= 2)),
        (h.return = e),
        (l.return = e),
        (l.sibling = h),
        (e.child = l),
        Ha(null, l),
        (l = e.child),
        (h = t.child.memoizedState),
        h === null
          ? (h = Ar(n))
          : ((u = h.cachePool),
            u !== null
              ? ((E = Qt._currentValue),
                (u = u.parent !== E ? { parent: E, pool: E } : u))
              : (u = Tf()),
            (h = { baseLanes: h.baseLanes | n, cachePool: u })),
        (l.memoizedState = h),
        (l.childLanes = Tr(t, d, n)),
        (e.memoizedState = Dr),
        Ha(t.child, l))
      : (_n(e),
        (n = t.child),
        (t = n.sibling),
        (n = an(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Or(t, e) {
    return (
      (e = li({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function li(t, e) {
    return ((t = Ae(22, t, null, e)), (t.lanes = 0), t);
  }
  function xr(t, e, n) {
    return (
      ol(e, t.child, null, n),
      (t = Or(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Ld(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), jc(t.return, e, n));
  }
  function Cr(t, e, n, l, u, c) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
          treeForkCount: c,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = u),
        (d.treeForkCount = c));
  }
  function wd(t, e, n) {
    var l = e.pendingProps,
      u = l.revealOrder,
      c = l.tail;
    l = l.children;
    var d = jt.current,
      h = (d & 2) !== 0;
    if (
      (h ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      j(jt, d),
      le(t, e, l, n),
      (l = ht ? Da : 0),
      !h && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ld(t, n, e);
        else if (t.tag === 19) Ld(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          ((t = n.alternate),
            t !== null && Zu(t) === null && (u = n),
            (n = n.sibling));
        ((n = u),
          n === null
            ? ((u = e.child), (e.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          Cr(e, !1, u, n, c, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Zu(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = n), (n = u), (u = t));
        }
        Cr(e, !0, n, null, c, l);
        break;
      case "together":
        Cr(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Hn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ul(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = an(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Rr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Lu(t)));
  }
  function Jy(t, e, n) {
    switch (e.tag) {
      case 3:
        (Pt(e, e.stateNode.containerInfo),
          Cn(e, Qt, t.memoizedState.cache),
          ll());
        break;
      case 27:
      case 5:
        tn(e);
        break;
      case 4:
        Pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Cn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Pc(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (_n(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Gd(t, e, n)
              : (_n(e), (t = fn(t, e, n)), t !== null ? t.sibling : null);
        _n(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Ul(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          u)
        ) {
          if (l) return wd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          j(jt, jt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Md(t, e, n, e.pendingProps));
      case 24:
        Cn(e, Qt, t.memoizedState.cache);
    }
    return fn(t, e, n);
  }
  function qd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) It = !0;
      else {
        if (!Rr(t, n) && (e.flags & 128) === 0) return ((It = !1), Jy(t, e, n));
        It = (t.flags & 131072) !== 0;
      }
    else ((It = !1), ht && (e.flags & 1048576) !== 0 && yf(e, Da, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = cl(e.elementType)), (e.type = t), typeof t == "function"))
            Bc(t)
              ? ((l = fl(t, l)), (e.tag = 1), (e = Ud(null, e, t, l, n)))
              : ((e.tag = 0), (e = Er(null, e, t, l, n)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === Q) {
                ((e.tag = 11), (e = Cd(null, e, t, l, n)));
                break t;
              } else if (u === Z) {
                ((e.tag = 14), (e = Rd(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = st(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return Er(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (u = fl(l, e.pendingProps)), Ud(t, e, l, u, n));
      case 3:
        t: {
          if ((Pt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          l = e.pendingProps;
          var c = e.memoizedState;
          ((u = c.element), Jc(t, e), Ma(e, l, null, n));
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            Cn(e, Qt, l),
            l !== c.cache && Vc(e, [Qt], n, !0),
            Na(),
            (l = d.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = Hd(t, e, l, n);
              break t;
            } else if (l !== u) {
              ((u = He(Error(o(424)), e)), Aa(u), (e = Hd(t, e, l, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Gt = Ye(t.firstChild),
                  ee = e,
                  ht = !0,
                  On = null,
                  we = !0,
                  n = Mf(e, null, l, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ll(), l === u)) {
              e = fn(t, e, n);
              break t;
            }
            le(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ni(t, e),
          t === null
            ? (n = Fp(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : ht ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = bi(rt.current).createElement(n)),
                (l[te] = e),
                (l[de] = t),
                ae(l, n, t),
                Wt(l),
                (e.stateNode = l))
            : (e.memoizedState = Fp(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          tn(e),
          t === null &&
            ht &&
            ((l = e.stateNode = Kp(e.type, e.pendingProps, rt.current)),
            (ee = e),
            (we = !0),
            (u = Gt),
            Yn(e.type) ? ((co = u), (Gt = Ye(l.firstChild))) : (Gt = u)),
          le(t, e, e.pendingProps.children, n),
          ni(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ht &&
            ((u = l = Gt) &&
              ((l = Tv(l, e.type, e.pendingProps, we)),
              l !== null
                ? ((e.stateNode = l),
                  (ee = e),
                  (Gt = Ye(l.firstChild)),
                  (we = !1),
                  (u = !0))
                : (u = !1)),
            u || xn(e)),
          tn(e),
          (u = e.type),
          (c = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = c.children),
          no(u, c) ? (l = null) : d !== null && no(u, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = er(t, e, qy, null, null, n)), (Fa._currentValue = u)),
          ni(t, e),
          le(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            ht &&
            ((t = n = Gt) &&
              ((n = Ov(n, e.pendingProps, we)),
              n !== null
                ? ((e.stateNode = n), (ee = e), (Gt = null), (t = !0))
                : (t = !1)),
            t || xn(e)),
          null
        );
      case 13:
        return Gd(t, e, n);
      case 4:
        return (
          Pt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = ol(e, null, l, n)) : le(t, e, l, n),
          e.child
        );
      case 11:
        return Cd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (le(t, e, e.pendingProps, n), e.child);
      case 8:
        return (le(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (le(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (l = e.pendingProps),
          Cn(e, e.type, l.value),
          le(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (l = e.pendingProps.children),
          ul(e),
          (u = ne(u)),
          (l = l(u)),
          (e.flags |= 1),
          le(t, e, l, n),
          e.child
        );
      case 14:
        return Rd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Nd(t, e, e.type, e.pendingProps, n);
      case 19:
        return wd(t, e, n);
      case 31:
        return Ky(t, e, n);
      case 22:
        return Md(t, e, n, e.pendingProps);
      case 24:
        return (
          ul(e),
          (l = ne(Qt)),
          t === null
            ? ((u = Zc()),
              u === null &&
                ((u = Bt),
                (c = Xc()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= n),
                (u = c)),
              (e.memoizedState = { parent: l, cache: u }),
              Kc(e),
              Cn(e, Qt, u))
            : ((t.lanes & n) !== 0 && (Jc(t, e), Ma(e, null, null, n), Na()),
              (u = t.memoizedState),
              (c = e.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Cn(e, Qt, l))
                : ((l = c.cache),
                  Cn(e, Qt, l),
                  l !== u.cache && Vc(e, [Qt], n, !0))),
          le(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function Nr(t, e, n, l, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (dp()) t.flags |= 8192;
        else throw ((rl = ju), Ic);
    } else t.flags &= -16777217;
  }
  function Yd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !em(e)))
      if (dp()) t.flags |= 8192;
      else throw ((rl = ju), Ic);
  }
  function ai(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? vs() : 536870912), (t.lanes |= e), (Il |= e)));
  }
  function Ga(t, e) {
    if (!ht)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Lt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var u = t.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 65011712),
          (l |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = n), e);
  }
  function Wy(t, e, n) {
    var l = e.pendingProps;
    switch ((Lc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Lt(e), null);
      case 1:
        return (Lt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          rn(Qt),
          Ut(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Bl(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), qc())),
          Lt(e),
          null
        );
      case 26:
        var u = e.type,
          c = e.memoizedState;
        return (
          t === null
            ? (dn(e),
              c !== null ? (Lt(e), Yd(e, c)) : (Lt(e), Nr(e, u, null, l, n)))
            : c
              ? c !== t.memoizedState
                ? (dn(e), Lt(e), Yd(e, c))
                : (Lt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== l && dn(e),
                Lt(e),
                Nr(e, u, t, l, n)),
          null
        );
      case 27:
        if (
          (ca(e),
          (n = rt.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (Lt(e), null);
          }
          ((t = K.current),
            Bl(e) ? bf(e) : ((t = Kp(u, l, n)), (e.stateNode = t), dn(e)));
        }
        return (Lt(e), null);
      case 5:
        if ((ca(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(o(166));
            return (Lt(e), null);
          }
          if (((c = K.current), Bl(e))) bf(e);
          else {
            var d = bi(rt.current);
            switch (c) {
              case 1:
                c = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                c = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    c = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    c = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((c = d.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (c.multiple = !0)
                        : l.size && (c.size = l.size));
                    break;
                  default:
                    c =
                      typeof l.is == "string"
                        ? d.createElement(u, { is: l.is })
                        : d.createElement(u);
                }
            }
            ((c[te] = e), (c[de] = l));
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) c.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = c;
            t: switch ((ae(c, u, l), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && dn(e);
          }
        }
        return (
          Lt(e),
          Nr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && dn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = rt.current), Bl(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (u = ee),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((t[te] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Gp(t.nodeValue, n)
              )),
              t || xn(e, !0));
          } else
            ((t = bi(t).createTextNode(l)), (t[te] = e), (e.stateNode = t));
        }
        return (Lt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Bl(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[te] = e;
            } else
              (ll(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Lt(e), (t = !1));
          } else
            ((n = qc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (Lt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Bl(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[te] = e;
            } else
              (ll(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Lt(e), (u = !1));
          } else
            ((u = qc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
        }
        return (
          Oe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (u = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (u = l.alternate.memoizedState.cachePool.pool),
                (c = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (c = l.memoizedState.cachePool.pool),
                c !== u && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ai(e, e.updateQueue),
              Lt(e),
              null)
        );
      case 4:
        return (Ut(), t === null && $r(e.stateNode.containerInfo), Lt(e), null);
      case 10:
        return (rn(e.type), Lt(e), null);
      case 19:
        if ((G(jt), (l = e.memoizedState), l === null)) return (Lt(e), null);
        if (((u = (e.flags & 128) !== 0), (c = l.rendering), c === null))
          if (u) Ga(l, !1);
          else {
            if (Yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Zu(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      Ga(l, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      ai(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (mf(n, t), (n = n.sibling));
                  return (
                    j(jt, (jt.current & 1) | 2),
                    ht && un(e, l.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            l.tail !== null &&
              be() > oi &&
              ((e.flags |= 128), (u = !0), Ga(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Zu(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ai(e, t),
                Ga(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !c.alternate &&
                  !ht)
              )
                return (Lt(e), null);
            } else
              2 * be() - l.renderingStartTime > oi &&
                n !== 536870912 &&
                ((e.flags |= 128), (u = !0), Ga(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = l.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (l.last = c));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = be()),
            (t.sibling = null),
            (n = jt.current),
            j(jt, u ? (n & 1) | 2 : n & 1),
            ht && un(e, l.treeForkCount),
            t)
          : (Lt(e), null);
      case 22:
      case 23:
        return (
          Oe(e),
          kc(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Lt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Lt(e),
          (n = e.updateQueue),
          n !== null && ai(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && G(il),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(Qt),
          Lt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Fy(t, e) {
    switch ((Lc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          rn(Qt),
          Ut(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ca(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Oe(e), e.alternate === null)) throw Error(o(340));
          ll();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Oe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          ll();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (G(jt), null);
      case 4:
        return (Ut(), null);
      case 10:
        return (rn(e.type), null);
      case 22:
      case 23:
        return (
          Oe(e),
          kc(),
          t !== null && G(il),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (rn(Qt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(t, e) {
    switch ((Lc(e), e.tag)) {
      case 3:
        (rn(Qt), Ut());
        break;
      case 26:
      case 27:
      case 5:
        ca(e);
        break;
      case 4:
        Ut();
        break;
      case 31:
        e.memoizedState !== null && Oe(e);
        break;
      case 13:
        Oe(e);
        break;
      case 19:
        G(jt);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        (Oe(e), kc(), t !== null && G(il));
        break;
      case 24:
        rn(Qt);
    }
  }
  function La(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var c = n.create,
              d = n.inst;
            ((l = c()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (h) {
      Nt(e, e.return, h);
    }
  }
  function Bn(t, e, n) {
    try {
      var l = e.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        l = c;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              h = d.destroy;
            if (h !== void 0) {
              ((d.destroy = void 0), (u = e));
              var E = n,
                C = h;
              try {
                C();
              } catch (z) {
                Nt(u, E, z);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (z) {
      Nt(e, e.return, z);
    }
  }
  function Vd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        zf(e, n);
      } catch (l) {
        Nt(t, t.return, l);
      }
    }
  }
  function Xd(t, e, n) {
    ((n.props = fl(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Nt(t, e, l);
    }
  }
  function wa(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (u) {
      Nt(t, e, u);
    }
  }
  function $e(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Nt(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Nt(t, e, u);
        }
      else n.current = null;
  }
  function Qd(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function Mr(t, e, n) {
    try {
      var l = t.stateNode;
      (vv(l, t.type, n, e), (l[de] = e));
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function Zd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Yn(t.type)) ||
      t.tag === 4
    );
  }
  function _r(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Zd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Yn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zr(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = nn)));
    else if (
      l !== 4 &&
      (l === 27 && Yn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (zr(t, e, n), t = t.sibling; t !== null; )
        (zr(t, e, n), (t = t.sibling));
  }
  function ui(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      l !== 4 &&
      (l === 27 && Yn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ui(t, e, n), t = t.sibling; t !== null; )
        (ui(t, e, n), (t = t.sibling));
  }
  function Id(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      (ae(e, l, n), (e[te] = t), (e[de] = n));
    } catch (c) {
      Nt(t, t.return, c);
    }
  }
  var pn = !1,
    Kt = !1,
    Br = !1,
    Kd = typeof WeakSet == "function" ? WeakSet : Set,
    Ft = null;
  function $y(t, e) {
    if (((t = t.containerInfo), (to = xi), (t = af(t)), xc(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              h = -1,
              E = -1,
              C = 0,
              z = 0,
              L = t,
              R = null;
            e: for (;;) {
              for (
                var N;
                L !== n || (u !== 0 && L.nodeType !== 3) || (h = d + u),
                  L !== c || (l !== 0 && L.nodeType !== 3) || (E = d + l),
                  L.nodeType === 3 && (d += L.nodeValue.length),
                  (N = L.firstChild) !== null;
              )
                ((R = L), (L = N));
              for (;;) {
                if (L === t) break e;
                if (
                  (R === n && ++C === u && (h = d),
                  R === c && ++z === l && (E = d),
                  (N = L.nextSibling) !== null)
                )
                  break;
                ((L = R), (R = L.parentNode));
              }
              L = N;
            }
            n = h === -1 || E === -1 ? null : { start: h, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      eo = { focusedElem: t, selectionRange: n }, xi = !1, Ft = e;
      Ft !== null;
    )
      if (
        ((e = Ft), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Ft = t));
      else
        for (; Ft !== null; ) {
          switch (((e = Ft), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((u = t[n]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ((t = void 0),
                  (n = e),
                  (u = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = n.stateNode));
                try {
                  var J = fl(n.type, u);
                  ((t = l.getSnapshotBeforeUpdate(J, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (et) {
                  Nt(n, n.return, et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  ao(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ao(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Ft = t));
            break;
          }
          Ft = e.return;
        }
  }
  function Jd(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (gn(t, n), l & 4 && La(5, n));
        break;
      case 1:
        if ((gn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Nt(n, n.return, d);
            }
          else {
            var u = fl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Nt(n, n.return, d);
            }
          }
        (l & 64 && Vd(n), l & 512 && wa(n, n.return));
        break;
      case 3:
        if ((gn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            zf(t, e);
          } catch (d) {
            Nt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Id(n);
      case 26:
      case 5:
        (gn(t, n), e === null && l & 4 && Qd(n), l & 512 && wa(n, n.return));
        break;
      case 12:
        gn(t, n);
        break;
      case 31:
        (gn(t, n), l & 4 && $d(t, n));
        break;
      case 13:
        (gn(t, n),
          l & 4 && kd(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = iv.bind(null, n)), xv(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || pn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Kt), (u = pn));
          var c = Kt;
          ((pn = l),
            (Kt = e) && !c ? hn(t, n, (n.subtreeFlags & 8772) !== 0) : gn(t, n),
            (pn = u),
            (Kt = c));
        }
        break;
      case 30:
        break;
      default:
        gn(t, n);
    }
  }
  function Wd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Wd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && oc(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var wt = null,
    me = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; ) (Fd(t, e, n), (n = n.sibling));
  }
  function Fd(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(ra, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Kt || $e(n, e),
          mn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Kt || $e(n, e);
        var l = wt,
          u = me;
        (Yn(n.type) && ((wt = n.stateNode), (me = !1)),
          mn(t, e, n),
          Ka(n.stateNode),
          (wt = l),
          (me = u));
        break;
      case 5:
        Kt || $e(n, e);
      case 6:
        if (
          ((l = wt),
          (u = me),
          (wt = null),
          mn(t, e, n),
          (wt = l),
          (me = u),
          wt !== null)
        )
          if (me)
            try {
              (wt.nodeType === 9
                ? wt.body
                : wt.nodeName === "HTML"
                  ? wt.ownerDocument.body
                  : wt
              ).removeChild(n.stateNode);
            } catch (c) {
              Nt(n, e, c);
            }
          else
            try {
              wt.removeChild(n.stateNode);
            } catch (c) {
              Nt(n, e, c);
            }
        break;
      case 18:
        wt !== null &&
          (me
            ? ((t = wt),
              Vp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              ta(t))
            : Vp(wt, n.stateNode));
        break;
      case 4:
        ((l = wt),
          (u = me),
          (wt = n.stateNode.containerInfo),
          (me = !0),
          mn(t, e, n),
          (wt = l),
          (me = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Bn(2, n, e), Kt || Bn(4, n, e), mn(t, e, n));
        break;
      case 1:
        (Kt ||
          ($e(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Xd(n, e, l)),
          mn(t, e, n));
        break;
      case 21:
        mn(t, e, n);
        break;
      case 22:
        ((Kt = (l = Kt) || n.memoizedState !== null), mn(t, e, n), (Kt = l));
        break;
      default:
        mn(t, e, n);
    }
  }
  function $d(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ta(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
    }
  }
  function kd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ta(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function ky(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Kd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Kd()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function ii(t, e) {
    var n = ky(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var u = cv.bind(null, t, l);
        l.then(u, u);
      }
    });
  }
  function ge(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l],
          c = t,
          d = e,
          h = d;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Yn(h.type)) {
                ((wt = h.stateNode), (me = !1));
                break t;
              }
              break;
            case 5:
              ((wt = h.stateNode), (me = !1));
              break t;
            case 3:
            case 4:
              ((wt = h.stateNode.containerInfo), (me = !0));
              break t;
          }
          h = h.return;
        }
        if (wt === null) throw Error(o(160));
        (Fd(c, d, u),
          (wt = null),
          (me = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Pd(e, t), (e = e.sibling));
  }
  var Ie = null;
  function Pd(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ge(e, t),
          he(t),
          l & 4 && (Bn(3, t, t.return), La(3, t), Bn(5, t, t.return)));
        break;
      case 1:
        (ge(e, t),
          he(t),
          l & 512 && (Kt || n === null || $e(n, n.return)),
          l & 64 &&
            pn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var u = Ie;
        if (
          (ge(e, t),
          he(t),
          l & 512 && (Kt || n === null || $e(n, n.return)),
          l & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type),
                    (n = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (l) {
                    case "title":
                      ((c = u.getElementsByTagName("title")[0]),
                        (!c ||
                          c[fa] ||
                          c[te] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = u.createElement(l)),
                          u.head.insertBefore(
                            c,
                            u.querySelector("head > title"),
                          )),
                        ae(c, l, n),
                        (c[te] = t),
                        Wt(c),
                        (l = c));
                      break t;
                    case "link":
                      var d = Pp("link", "href", u).get(l + (n.href || ""));
                      if (d) {
                        for (var h = 0; h < d.length; h++)
                          if (
                            ((c = d[h]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(h, 1);
                            break e;
                          }
                      }
                      ((c = u.createElement(l)),
                        ae(c, l, n),
                        u.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (d = Pp("meta", "content", u).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (h = 0; h < d.length; h++)
                          if (
                            ((c = d[h]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(h, 1);
                            break e;
                          }
                      }
                      ((c = u.createElement(l)),
                        ae(c, l, n),
                        u.head.appendChild(c));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((c[te] = t), Wt(c), (l = c));
                }
                t.stateNode = l;
              } else tm(u, t.type, t.stateNode);
            else t.stateNode = kp(u, l, t.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                l === null
                  ? tm(u, t.type, t.stateNode)
                  : kp(u, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                Mr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ge(e, t),
          he(t),
          l & 512 && (Kt || n === null || $e(n, n.return)),
          n !== null && l & 4 && Mr(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (ge(e, t),
          he(t),
          l & 512 && (Kt || n === null || $e(n, n.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Al(u, "");
          } catch (J) {
            Nt(t, t.return, J);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Mr(t, u, n !== null ? n.memoizedProps : u)),
          l & 1024 && (Br = !0));
        break;
      case 6:
        if ((ge(e, t), he(t), l & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (J) {
            Nt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Di = null),
          (u = Ie),
          (Ie = Si(e.containerInfo)),
          ge(e, t),
          (Ie = u),
          he(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ta(e.containerInfo);
          } catch (J) {
            Nt(t, t.return, J);
          }
        Br && ((Br = !1), tp(t));
        break;
      case 4:
        ((l = Ie),
          (Ie = Si(t.stateNode.containerInfo)),
          ge(e, t),
          he(t),
          (Ie = l));
        break;
      case 12:
        (ge(e, t), he(t));
        break;
      case 31:
        (ge(e, t),
          he(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), ii(t, l))));
        break;
      case 13:
        (ge(e, t),
          he(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (ri = be()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), ii(t, l))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          C = pn,
          z = Kt;
        if (
          ((pn = C || u),
          (Kt = z || E),
          ge(e, t),
          (Kt = z),
          (pn = C),
          he(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (n === null || E || pn || Kt || dl(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                E = n = e;
                try {
                  if (((c = E.stateNode), u))
                    ((d = c.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    h = E.stateNode;
                    var L = E.memoizedProps.style,
                      R =
                        L != null && L.hasOwnProperty("display")
                          ? L.display
                          : null;
                    h.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (J) {
                  Nt(E, E.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = u ? "" : E.memoizedProps;
                } catch (J) {
                  Nt(E, E.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                E = e;
                try {
                  var N = E.stateNode;
                  u ? Xp(N, !0) : Xp(E.stateNode, !1);
                } catch (J) {
                  Nt(E, E.return, J);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), ii(t, n))));
        break;
      case 19:
        (ge(e, t),
          he(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), ii(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ge(e, t), he(t));
    }
  }
  function he(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (Zd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              c = _r(t);
            ui(t, c, u);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Al(d, ""), (n.flags &= -33));
            var h = _r(t);
            ui(t, h, d);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              C = _r(t);
            zr(t, C, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (z) {
        Nt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function tp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (tp(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function gn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Jd(t, e.alternate, e), (e = e.sibling));
  }
  function dl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Bn(4, e, e.return), dl(e));
          break;
        case 1:
          $e(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Xd(e, e.return, n),
            dl(e));
          break;
        case 27:
          Ka(e.stateNode);
        case 26:
        case 5:
          ($e(e, e.return), dl(e));
          break;
        case 22:
          e.memoizedState === null && dl(e);
          break;
        case 30:
          dl(e);
          break;
        default:
          dl(e);
      }
      t = t.sibling;
    }
  }
  function hn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        u = t,
        c = e,
        d = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (hn(u, c, n), La(4, c));
          break;
        case 1:
          if (
            (hn(u, c, n),
            (l = c),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (C) {
              Nt(l, l.return, C);
            }
          if (((l = c), (u = l.updateQueue), u !== null)) {
            var h = l.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  _f(E[u], h);
            } catch (C) {
              Nt(l, l.return, C);
            }
          }
          (n && d & 64 && Vd(c), wa(c, c.return));
          break;
        case 27:
          Id(c);
        case 26:
        case 5:
          (hn(u, c, n), n && l === null && d & 4 && Qd(c), wa(c, c.return));
          break;
        case 12:
          hn(u, c, n);
          break;
        case 31:
          (hn(u, c, n), n && d & 4 && $d(u, c));
          break;
        case 13:
          (hn(u, c, n), n && d & 4 && kd(u, c));
          break;
        case 22:
          (c.memoizedState === null && hn(u, c, n), wa(c, c.return));
          break;
        case 30:
          break;
        default:
          hn(u, c, n);
      }
      e = e.sibling;
    }
  }
  function Ur(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ta(n)));
  }
  function Hr(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ta(t)));
  }
  function Ke(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (ep(t, e, n, l), (e = e.sibling));
  }
  function ep(t, e, n, l) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ke(t, e, n, l), u & 2048 && La(9, e));
        break;
      case 1:
        Ke(t, e, n, l);
        break;
      case 3:
        (Ke(t, e, n, l),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ta(t))));
        break;
      case 12:
        if (u & 2048) {
          (Ke(t, e, n, l), (t = e.stateNode));
          try {
            var c = e.memoizedProps,
              d = c.id,
              h = c.onPostCommit;
            typeof h == "function" &&
              h(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (E) {
            Nt(e, e.return, E);
          }
        } else Ke(t, e, n, l);
        break;
      case 31:
        Ke(t, e, n, l);
        break;
      case 13:
        Ke(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((c = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Ke(t, e, n, l)
              : qa(t, e)
            : c._visibility & 2
              ? Ke(t, e, n, l)
              : ((c._visibility |= 2),
                Xl(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Ur(d, e));
        break;
      case 24:
        (Ke(t, e, n, l), u & 2048 && Hr(e.alternate, e));
        break;
      default:
        Ke(t, e, n, l);
    }
  }
  function Xl(t, e, n, l, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var c = t,
        d = e,
        h = n,
        E = l,
        C = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Xl(c, d, h, E, u), La(8, d));
          break;
        case 23:
          break;
        case 22:
          var z = d.stateNode;
          (d.memoizedState !== null
            ? z._visibility & 2
              ? Xl(c, d, h, E, u)
              : qa(c, d)
            : ((z._visibility |= 2), Xl(c, d, h, E, u)),
            u && C & 2048 && Ur(d.alternate, d));
          break;
        case 24:
          (Xl(c, d, h, E, u), u && C & 2048 && Hr(d.alternate, d));
          break;
        default:
          Xl(c, d, h, E, u);
      }
      e = e.sibling;
    }
  }
  function qa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (qa(n, l), u & 2048 && Ur(l.alternate, l));
            break;
          case 24:
            (qa(n, l), u & 2048 && Hr(l.alternate, l));
            break;
          default:
            qa(n, l);
        }
        e = e.sibling;
      }
  }
  var Ya = 8192;
  function Ql(t, e, n) {
    if (t.subtreeFlags & Ya)
      for (t = t.child; t !== null; ) (np(t, e, n), (t = t.sibling));
  }
  function np(t, e, n) {
    switch (t.tag) {
      case 26:
        (Ql(t, e, n),
          t.flags & Ya &&
            t.memoizedState !== null &&
            wv(n, Ie, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ql(t, e, n);
        break;
      case 3:
      case 4:
        var l = Ie;
        ((Ie = Si(t.stateNode.containerInfo)), Ql(t, e, n), (Ie = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Ya), (Ya = 16777216), Ql(t, e, n), (Ya = l))
            : Ql(t, e, n));
        break;
      default:
        Ql(t, e, n);
    }
  }
  function lp(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ja(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Ft = l), up(l, t));
        }
      lp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ap(t), (t = t.sibling));
  }
  function ap(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ja(t), t.flags & 2048 && Bn(9, t, t.return));
        break;
      case 3:
        ja(t);
        break;
      case 12:
        ja(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ci(t))
          : ja(t);
        break;
      default:
        ja(t);
    }
  }
  function ci(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Ft = l), up(l, t));
        }
      lp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Bn(8, e, e.return), ci(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ci(e)));
          break;
        default:
          ci(e);
      }
      t = t.sibling;
    }
  }
  function up(t, e) {
    for (; Ft !== null; ) {
      var n = Ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ta(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Ft = l));
      else
        t: for (n = t; Ft !== null; ) {
          l = Ft;
          var u = l.sibling,
            c = l.return;
          if ((Wd(l), l === n)) {
            Ft = null;
            break t;
          }
          if (u !== null) {
            ((u.return = c), (Ft = u));
            break t;
          }
          Ft = c;
        }
    }
  }
  var Py = {
      getCacheForType: function (t) {
        var e = ne(Qt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return ne(Qt).controller.signal;
      },
    },
    tv = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    Bt = null,
    ft = null,
    pt = 0,
    Rt = 0,
    xe = null,
    Un = !1,
    Zl = !1,
    Gr = !1,
    yn = 0,
    Yt = 0,
    Hn = 0,
    pl = 0,
    Lr = 0,
    Ce = 0,
    Il = 0,
    Va = null,
    ye = null,
    wr = !1,
    ri = 0,
    ip = 0,
    oi = 1 / 0,
    si = null,
    Gn = null,
    Jt = 0,
    Ln = null,
    Kl = null,
    vn = 0,
    qr = 0,
    Yr = null,
    cp = null,
    Xa = 0,
    jr = null;
  function Re() {
    return (Tt & 2) !== 0 && pt !== 0 ? pt & -pt : M.T !== null ? Kr() : Ds();
  }
  function rp() {
    if (Ce === 0)
      if ((pt & 536870912) === 0 || ht) {
        var t = vu;
        ((vu <<= 1), (vu & 3932160) === 0 && (vu = 262144), (Ce = t));
      } else Ce = 536870912;
    return ((t = Te.current), t !== null && (t.flags |= 32), Ce);
  }
  function ve(t, e, n) {
    (((t === Bt && (Rt === 2 || Rt === 9)) || t.cancelPendingCommit !== null) &&
      (Jl(t, 0), wn(t, pt, Ce, !1)),
      sa(t, n),
      ((Tt & 2) === 0 || t !== Bt) &&
        (t === Bt &&
          ((Tt & 2) === 0 && (pl |= n), Yt === 4 && wn(t, pt, Ce, !1)),
        ke(t)));
  }
  function op(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(o(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || oa(t, e),
      u = l ? lv(t, e) : Xr(t, e, !0),
      c = l;
    do {
      if (u === 0) {
        Zl && !l && wn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), c && !ev(n))) {
          ((u = Xr(t, e, !1)), (c = !1));
          continue;
        }
        if (u === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var h = t;
              u = Va;
              var E = h.current.memoizedState.isDehydrated;
              if ((E && (Jl(h, d).flags |= 256), (d = Xr(h, d, !1)), d !== 2)) {
                if (Gr && !E) {
                  ((h.errorRecoveryDisabledLanes |= c), (pl |= c), (u = 4));
                  break t;
                }
                ((c = ye),
                  (ye = u),
                  c !== null &&
                    (ye === null ? (ye = c) : ye.push.apply(ye, c)));
              }
              u = d;
            }
            if (((c = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Jl(t, 0), wn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (c = u), c)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              wn(l, e, Ce, !Un);
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((u = ri + 300 - be()), 10 < u)) {
            if ((wn(l, e, Ce, !Un), Su(l, 0, !0) !== 0)) break t;
            ((vn = e),
              (l.timeoutHandle = Yp(
                sp.bind(
                  null,
                  l,
                  n,
                  ye,
                  si,
                  wr,
                  e,
                  Ce,
                  pl,
                  Il,
                  Un,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          sp(l, n, ye, si, wr, e, Ce, pl, Il, Un, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ke(t);
  }
  function sp(t, e, n, l, u, c, d, h, E, C, z, L, R, N) {
    if (
      ((t.timeoutHandle = -1),
      (L = e.subtreeFlags),
      L & 8192 || (L & 16785408) === 16785408)
    ) {
      ((L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: nn,
      }),
        np(e, c, L));
      var J =
        (c & 62914560) === c ? ri - be() : (c & 4194048) === c ? ip - be() : 0;
      if (((J = qv(L, J)), J !== null)) {
        ((vn = c),
          (t.cancelPendingCommit = J(
            vp.bind(null, t, e, c, n, l, u, d, h, E, z, L, null, R, N),
          )),
          wn(t, c, d, !C));
        return;
      }
    }
    vp(t, e, c, n, l, u, d, h, E);
  }
  function ev(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            c = u.getSnapshot;
          u = u.value;
          try {
            if (!De(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function wn(t, e, n, l) {
    ((e &= ~Lr),
      (e &= ~pl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var c = 31 - Ee(u),
        d = 1 << c;
      ((l[c] = -1), (u &= ~d));
    }
    n !== 0 && bs(t, n, e);
  }
  function fi() {
    return (Tt & 6) === 0 ? (Qa(0), !1) : !0;
  }
  function Vr() {
    if (ft !== null) {
      if (Rt === 0) var t = ft.return;
      else ((t = ft), (cn = al = null), ar(t), (wl = null), (xa = 0), (t = ft));
      for (; t !== null; ) (jd(t.alternate, t), (t = t.return));
      ft = null;
    }
  }
  function Jl(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Ev(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (vn = 0),
      Vr(),
      (Bt = t),
      (ft = n = an(t.current, null)),
      (pt = e),
      (Rt = 0),
      (xe = null),
      (Un = !1),
      (Zl = oa(t, e)),
      (Gr = !1),
      (Il = Ce = Lr = pl = Hn = Yt = 0),
      (ye = Va = null),
      (wr = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var u = 31 - Ee(l),
          c = 1 << u;
        ((e |= t[u]), (l &= ~c));
      }
    return ((yn = e), zu(), n);
  }
  function fp(t, e) {
    ((ct = null),
      (M.H = Ua),
      e === Ll || e === Yu
        ? ((e = Cf()), (Rt = 3))
        : e === Ic
          ? ((e = Cf()), (Rt = 4))
          : (Rt =
              e === Sr
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (xe = e),
      ft === null && ((Yt = 1), ti(t, He(e, t.current))));
  }
  function dp() {
    var t = Te.current;
    return t === null
      ? !0
      : (pt & 4194048) === pt
        ? qe === null
        : (pt & 62914560) === pt || (pt & 536870912) !== 0
          ? t === qe
          : !1;
  }
  function pp() {
    var t = M.H;
    return ((M.H = Ua), t === null ? Ua : t);
  }
  function mp() {
    var t = M.A;
    return ((M.A = Py), t);
  }
  function di() {
    ((Yt = 4),
      Un || ((pt & 4194048) !== pt && Te.current !== null) || (Zl = !0),
      ((Hn & 134217727) === 0 && (pl & 134217727) === 0) ||
        Bt === null ||
        wn(Bt, pt, Ce, !1));
  }
  function Xr(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var u = pp(),
      c = mp();
    ((Bt !== t || pt !== e) && ((si = null), Jl(t, e)), (e = !1));
    var d = Yt;
    t: do
      try {
        if (Rt !== 0 && ft !== null) {
          var h = ft,
            E = xe;
          switch (Rt) {
            case 8:
              (Vr(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Te.current === null && (e = !0);
              var C = Rt;
              if (((Rt = 0), (xe = null), Wl(t, h, E, C), n && Zl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((C = Rt), (Rt = 0), (xe = null), Wl(t, h, E, C));
          }
        }
        (nv(), (d = Yt));
        break;
      } catch (z) {
        fp(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (cn = al = null),
      (Tt = l),
      (M.H = u),
      (M.A = c),
      ft === null && ((Bt = null), (pt = 0), zu()),
      d
    );
  }
  function nv() {
    for (; ft !== null; ) gp(ft);
  }
  function lv(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = pp(),
      u = mp();
    Bt !== t || pt !== e
      ? ((si = null), (oi = be() + 500), Jl(t, e))
      : (Zl = oa(t, e));
    t: do
      try {
        if (Rt !== 0 && ft !== null) {
          e = ft;
          var c = xe;
          e: switch (Rt) {
            case 1:
              ((Rt = 0), (xe = null), Wl(t, e, c, 1));
              break;
            case 2:
            case 9:
              if (Of(c)) {
                ((Rt = 0), (xe = null), hp(e));
                break;
              }
              ((e = function () {
                ((Rt !== 2 && Rt !== 9) || Bt !== t || (Rt = 7), ke(t));
              }),
                c.then(e, e));
              break t;
            case 3:
              Rt = 7;
              break t;
            case 4:
              Rt = 5;
              break t;
            case 7:
              Of(c)
                ? ((Rt = 0), (xe = null), hp(e))
                : ((Rt = 0), (xe = null), Wl(t, e, c, 7));
              break;
            case 5:
              var d = null;
              switch (ft.tag) {
                case 26:
                  d = ft.memoizedState;
                case 5:
                case 27:
                  var h = ft;
                  if (d ? em(d) : h.stateNode.complete) {
                    ((Rt = 0), (xe = null));
                    var E = h.sibling;
                    if (E !== null) ft = E;
                    else {
                      var C = h.return;
                      C !== null ? ((ft = C), pi(C)) : (ft = null);
                    }
                    break e;
                  }
              }
              ((Rt = 0), (xe = null), Wl(t, e, c, 5));
              break;
            case 6:
              ((Rt = 0), (xe = null), Wl(t, e, c, 6));
              break;
            case 8:
              (Vr(), (Yt = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        av();
        break;
      } catch (z) {
        fp(t, z);
      }
    while (!0);
    return (
      (cn = al = null),
      (M.H = l),
      (M.A = u),
      (Tt = n),
      ft !== null ? 0 : ((Bt = null), (pt = 0), zu(), Yt)
    );
  }
  function av() {
    for (; ft !== null && !Ch(); ) gp(ft);
  }
  function gp(t) {
    var e = qd(t.alternate, t, yn);
    ((t.memoizedProps = t.pendingProps), e === null ? pi(t) : (ft = e));
  }
  function hp(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Bd(n, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = Bd(n, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        ar(e);
      default:
        (jd(n, e), (e = ft = mf(e, yn)), (e = qd(n, e, yn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? pi(t) : (ft = e));
  }
  function Wl(t, e, n, l) {
    ((cn = al = null), ar(e), (wl = null), (xa = 0));
    var u = e.return;
    try {
      if (Iy(t, u, e, n, pt)) {
        ((Yt = 1), ti(t, He(n, t.current)), (ft = null));
        return;
      }
    } catch (c) {
      if (u !== null) throw ((ft = u), c);
      ((Yt = 1), ti(t, He(n, t.current)), (ft = null));
      return;
    }
    e.flags & 32768
      ? (ht || l === 1
          ? (t = !0)
          : Zl || (pt & 536870912) !== 0
            ? (t = !1)
            : ((Un = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Te.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        yp(e, t))
      : pi(e);
  }
  function pi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        yp(e, Un);
        return;
      }
      t = e.return;
      var n = Wy(e.alternate, e, yn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function yp(t, e) {
    do {
      var n = Fy(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (ft = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    ((Yt = 6), (ft = null));
  }
  function vp(t, e, n, l, u, c, d, h, E) {
    t.cancelPendingCommit = null;
    do mi();
    while (Jt !== 0);
    if ((Tt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= _c),
        Lh(t, n, c, d, h, E),
        t === Bt && ((ft = Bt = null), (pt = 0)),
        (Kl = e),
        (Ln = t),
        (vn = n),
        (qr = c),
        (Yr = u),
        (cp = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            rv(hu, function () {
              return (Ap(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = M.T), (M.T = null), (u = q.p), (q.p = 2), (d = Tt), (Tt |= 4));
        try {
          $y(t, e, n);
        } finally {
          ((Tt = d), (q.p = u), (M.T = l));
        }
      }
      ((Jt = 1), bp(), Sp(), Ep());
    }
  }
  function bp() {
    if (Jt === 1) {
      Jt = 0;
      var t = Ln,
        e = Kl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var l = q.p;
        q.p = 2;
        var u = Tt;
        Tt |= 4;
        try {
          Pd(e, t);
          var c = eo,
            d = af(t.containerInfo),
            h = c.focusedElem,
            E = c.selectionRange;
          if (
            d !== h &&
            h &&
            h.ownerDocument &&
            lf(h.ownerDocument.documentElement, h)
          ) {
            if (E !== null && xc(h)) {
              var C = E.start,
                z = E.end;
              if ((z === void 0 && (z = C), "selectionStart" in h))
                ((h.selectionStart = C),
                  (h.selectionEnd = Math.min(z, h.value.length)));
              else {
                var L = h.ownerDocument || document,
                  R = (L && L.defaultView) || window;
                if (R.getSelection) {
                  var N = R.getSelection(),
                    J = h.textContent.length,
                    et = Math.min(E.start, J),
                    zt = E.end === void 0 ? et : Math.min(E.end, J);
                  !N.extend && et > zt && ((d = zt), (zt = et), (et = d));
                  var O = nf(h, et),
                    D = nf(h, zt);
                  if (
                    O &&
                    D &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== O.node ||
                      N.anchorOffset !== O.offset ||
                      N.focusNode !== D.node ||
                      N.focusOffset !== D.offset)
                  ) {
                    var x = L.createRange();
                    (x.setStart(O.node, O.offset),
                      N.removeAllRanges(),
                      et > zt
                        ? (N.addRange(x), N.extend(D.node, D.offset))
                        : (x.setEnd(D.node, D.offset), N.addRange(x)));
                  }
                }
              }
            }
            for (L = [], N = h; (N = N.parentNode); )
              N.nodeType === 1 &&
                L.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof h.focus == "function" && h.focus(), h = 0;
              h < L.length;
              h++
            ) {
              var U = L[h];
              ((U.element.scrollLeft = U.left), (U.element.scrollTop = U.top));
            }
          }
          ((xi = !!to), (eo = to = null));
        } finally {
          ((Tt = u), (q.p = l), (M.T = n));
        }
      }
      ((t.current = e), (Jt = 2));
    }
  }
  function Sp() {
    if (Jt === 2) {
      Jt = 0;
      var t = Ln,
        e = Kl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = M.T), (M.T = null));
        var l = q.p;
        q.p = 2;
        var u = Tt;
        Tt |= 4;
        try {
          Jd(t, e.alternate, e);
        } finally {
          ((Tt = u), (q.p = l), (M.T = n));
        }
      }
      Jt = 3;
    }
  }
  function Ep() {
    if (Jt === 4 || Jt === 3) {
      ((Jt = 0), Rh());
      var t = Ln,
        e = Kl,
        n = vn,
        l = cp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Kl = Ln = null), Dp(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Gn = null),
        cc(n),
        (e = e.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = M.T), (u = q.p), (q.p = 2), (M.T = null));
        try {
          for (var c = t.onRecoverableError, d = 0; d < l.length; d++) {
            var h = l[d];
            c(h.value, { componentStack: h.stack });
          }
        } finally {
          ((M.T = e), (q.p = u));
        }
      }
      ((vn & 3) !== 0 && mi(),
        ke(t),
        (u = t.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? t === jr
            ? Xa++
            : ((Xa = 0), (jr = t))
          : (Xa = 0),
        Qa(0));
    }
  }
  function Dp(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ta(e)));
  }
  function mi() {
    return (bp(), Sp(), Ep(), Ap());
  }
  function Ap() {
    if (Jt !== 5) return !1;
    var t = Ln,
      e = qr;
    qr = 0;
    var n = cc(vn),
      l = M.T,
      u = q.p;
    try {
      ((q.p = 32 > n ? 32 : n), (M.T = null), (n = Yr), (Yr = null));
      var c = Ln,
        d = vn;
      if (((Jt = 0), (Kl = Ln = null), (vn = 0), (Tt & 6) !== 0))
        throw Error(o(331));
      var h = Tt;
      if (
        ((Tt |= 4),
        ap(c.current),
        ep(c, c.current, d, n),
        (Tt = h),
        Qa(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(ra, c);
        } catch {}
      return !0;
    } finally {
      ((q.p = u), (M.T = l), Dp(t, e));
    }
  }
  function Tp(t, e, n) {
    ((e = He(n, e)),
      (e = br(t.stateNode, e, 2)),
      (t = Mn(t, e, 2)),
      t !== null && (sa(t, 2), ke(t)));
  }
  function Nt(t, e, n) {
    if (t.tag === 3) Tp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Tp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(l)))
          ) {
            ((t = He(n, t)),
              (n = Od(2)),
              (l = Mn(e, n, 2)),
              l !== null && (xd(n, l, e, t), sa(l, 2), ke(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qr(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new tv();
      var u = new Set();
      l.set(e, u);
    } else ((u = l.get(e)), u === void 0 && ((u = new Set()), l.set(e, u)));
    u.has(n) ||
      ((Gr = !0), u.add(n), (t = uv.bind(null, t, e, n)), e.then(t, t));
  }
  function uv(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Bt === t &&
        (pt & n) === n &&
        (Yt === 4 || (Yt === 3 && (pt & 62914560) === pt && 300 > be() - ri)
          ? (Tt & 2) === 0 && Jl(t, 0)
          : (Lr |= n),
        Il === pt && (Il = 0)),
      ke(t));
  }
  function Op(t, e) {
    (e === 0 && (e = vs()), (t = el(t, e)), t !== null && (sa(t, e), ke(t)));
  }
  function iv(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Op(t, n));
  }
  function cv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(e), Op(t, n));
  }
  function rv(t, e) {
    return lc(t, e);
  }
  var gi = null,
    Fl = null,
    Zr = !1,
    hi = !1,
    Ir = !1,
    qn = 0;
  function ke(t) {
    (t !== Fl &&
      t.next === null &&
      (Fl === null ? (gi = Fl = t) : (Fl = Fl.next = t)),
      (hi = !0),
      Zr || ((Zr = !0), sv()));
  }
  function Qa(t, e) {
    if (!Ir && hi) {
      Ir = !0;
      do
        for (var n = !1, l = gi; l !== null; ) {
          if (t !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var d = l.suspendedLanes,
                h = l.pingedLanes;
              ((c = (1 << (31 - Ee(42 | t) + 1)) - 1),
                (c &= u & ~(d & ~h)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), Np(l, c));
          } else
            ((c = pt),
              (c = Su(
                l,
                l === Bt ? c : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || oa(l, c) || ((n = !0), Np(l, c)));
          l = l.next;
        }
      while (n);
      Ir = !1;
    }
  }
  function ov() {
    xp();
  }
  function xp() {
    hi = Zr = !1;
    var t = 0;
    qn !== 0 && Sv() && (t = qn);
    for (var e = be(), n = null, l = gi; l !== null; ) {
      var u = l.next,
        c = Cp(l, e);
      (c === 0
        ? ((l.next = null),
          n === null ? (gi = u) : (n.next = u),
          u === null && (Fl = n))
        : ((n = l), (t !== 0 || (c & 3) !== 0) && (hi = !0)),
        (l = u));
    }
    ((Jt !== 0 && Jt !== 5) || Qa(t), qn !== 0 && (qn = 0));
  }
  function Cp(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        u = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;
    ) {
      var d = 31 - Ee(c),
        h = 1 << d,
        E = u[d];
      (E === -1
        ? ((h & n) === 0 || (h & l) !== 0) && (u[d] = Gh(h, e))
        : E <= e && (t.expiredLanes |= h),
        (c &= ~h));
    }
    if (
      ((e = Bt),
      (n = pt),
      (n = Su(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Rt === 2 || Rt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && ac(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || oa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && ac(l), cc(n))) {
        case 2:
        case 8:
          n = hs;
          break;
        case 32:
          n = hu;
          break;
        case 268435456:
          n = ys;
          break;
        default:
          n = hu;
      }
      return (
        (l = Rp.bind(null, t)),
        (n = lc(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && ac(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Rp(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (mi() && t.callbackNode !== n) return null;
    var l = pt;
    return (
      (l = Su(
        t,
        t === Bt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (op(t, l, e),
          Cp(t, be()),
          t.callbackNode != null && t.callbackNode === n
            ? Rp.bind(null, t)
            : null)
    );
  }
  function Np(t, e) {
    if (mi()) return null;
    op(t, e, !0);
  }
  function sv() {
    Dv(function () {
      (Tt & 6) !== 0 ? lc(gs, ov) : xp();
    });
  }
  function Kr() {
    if (qn === 0) {
      var t = Hl;
      (t === 0 && ((t = yu), (yu <<= 1), (yu & 261888) === 0 && (yu = 256)),
        (qn = t));
    }
    return qn;
  }
  function Mp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Tu("" + t);
  }
  function _p(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function fv(t, e, n, l, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var c = Mp((u[de] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[de] || null)
          ? Mp(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((c = e), (d = null)));
      var h = new Ru("action", "action", null, l, u);
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (qn !== 0) {
                  var E = d ? _p(u, d) : new FormData(u);
                  pr(
                    n,
                    { pending: !0, data: E, method: u.method, action: c },
                    null,
                    E,
                  );
                }
              } else
                typeof c == "function" &&
                  (h.preventDefault(),
                  (E = d ? _p(u, d) : new FormData(u)),
                  pr(
                    n,
                    { pending: !0, data: E, method: u.method, action: c },
                    c,
                    E,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Jr = 0; Jr < Mc.length; Jr++) {
    var Wr = Mc[Jr],
      dv = Wr.toLowerCase(),
      pv = Wr[0].toUpperCase() + Wr.slice(1);
    Ze(dv, "on" + pv);
  }
  (Ze(rf, "onAnimationEnd"),
    Ze(of, "onAnimationIteration"),
    Ze(sf, "onAnimationStart"),
    Ze("dblclick", "onDoubleClick"),
    Ze("focusin", "onFocus"),
    Ze("focusout", "onBlur"),
    Ze(Ny, "onTransitionRun"),
    Ze(My, "onTransitionStart"),
    Ze(_y, "onTransitionCancel"),
    Ze(ff, "onTransitionEnd"),
    El("onMouseEnter", ["mouseout", "mouseover"]),
    El("onMouseLeave", ["mouseout", "mouseover"]),
    El("onPointerEnter", ["pointerout", "pointerover"]),
    El("onPointerLeave", ["pointerout", "pointerover"]),
    $n(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    $n(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $n(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    $n(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $n(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Za =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Za),
    );
  function zp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        u = l.event;
      l = l.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var h = l[d],
              E = h.instance,
              C = h.currentTarget;
            if (((h = h.listener), E !== c && u.isPropagationStopped()))
              break t;
            ((c = h), (u.currentTarget = C));
            try {
              c(u);
            } catch (z) {
              _u(z);
            }
            ((u.currentTarget = null), (c = E));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((h = l[d]),
              (E = h.instance),
              (C = h.currentTarget),
              (h = h.listener),
              E !== c && u.isPropagationStopped())
            )
              break t;
            ((c = h), (u.currentTarget = C));
            try {
              c(u);
            } catch (z) {
              _u(z);
            }
            ((u.currentTarget = null), (c = E));
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[rc];
    n === void 0 && (n = e[rc] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Bp(e, t, 2, !1), n.add(l));
  }
  function Fr(t, e, n) {
    var l = 0;
    (e && (l |= 4), Bp(n, t, l, e));
  }
  var yi = "_reactListening" + Math.random().toString(36).slice(2);
  function $r(t) {
    if (!t[yi]) {
      ((t[yi] = !0),
        Os.forEach(function (n) {
          n !== "selectionchange" && (mv.has(n) || Fr(n, !1, t), Fr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yi] || ((e[yi] = !0), Fr("selectionchange", !1, e));
    }
  }
  function Bp(t, e, n, l) {
    switch (rm(e)) {
      case 2:
        var u = Vv;
        break;
      case 8:
        u = Xv;
        break;
      default:
        u = po;
    }
    ((n = u.bind(null, e, n, t)),
      (u = void 0),
      !yc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: u })
          : t.addEventListener(e, n, !0)
        : u !== void 0
          ? t.addEventListener(e, n, { passive: u })
          : t.addEventListener(e, n, !1));
  }
  function kr(t, e, n, l, u) {
    var c = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var h = l.stateNode.containerInfo;
          if (h === u) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var E = d.tag;
              if ((E === 3 || E === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; h !== null; ) {
            if (((d = vl(h)), d === null)) return;
            if (((E = d.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = c = d;
              continue t;
            }
            h = h.parentNode;
          }
        }
        l = l.return;
      }
    Ls(function () {
      var C = c,
        z = gc(n),
        L = [];
      t: {
        var R = df.get(t);
        if (R !== void 0) {
          var N = Ru,
            J = t;
          switch (t) {
            case "keypress":
              if (xu(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = cy;
              break;
            case "focusin":
              ((J = "focus"), (N = Ec));
              break;
            case "focusout":
              ((J = "blur"), (N = Ec));
              break;
            case "beforeblur":
            case "afterblur":
              N = Ec;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = sy;
              break;
            case rf:
            case of:
            case sf:
              N = kh;
              break;
            case ff:
              N = dy;
              break;
            case "scroll":
            case "scrollend":
              N = Kh;
              break;
            case "wheel":
              N = my;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Vs;
              break;
            case "toggle":
            case "beforetoggle":
              N = hy;
          }
          var et = (e & 4) !== 0,
            zt = !et && (t === "scroll" || t === "scrollend"),
            O = et ? (R !== null ? R + "Capture" : null) : R;
          et = [];
          for (var D = C, x; D !== null; ) {
            var U = D;
            if (
              ((x = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                x === null ||
                O === null ||
                ((U = pa(D, O)), U != null && et.push(Ia(D, U, x))),
              zt)
            )
              break;
            D = D.return;
          }
          0 < et.length &&
            ((R = new N(R, J, null, n, z)),
            L.push({ event: R, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            R &&
              n !== mc &&
              (J = n.relatedTarget || n.fromElement) &&
              (vl(J) || J[yl]))
          )
            break t;
          if (
            (N || R) &&
            ((R =
              z.window === z
                ? z
                : (R = z.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            N
              ? ((J = n.relatedTarget || n.toElement),
                (N = C),
                (J = J ? vl(J) : null),
                J !== null &&
                  ((zt = f(J)),
                  (et = J.tag),
                  J !== zt || (et !== 5 && et !== 27 && et !== 6)) &&
                  (J = null))
              : ((N = null), (J = C)),
            N !== J)
          ) {
            if (
              ((et = Ys),
              (U = "onMouseLeave"),
              (O = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((et = Vs),
                (U = "onPointerLeave"),
                (O = "onPointerEnter"),
                (D = "pointer")),
              (zt = N == null ? R : da(N)),
              (x = J == null ? R : da(J)),
              (R = new et(U, D + "leave", N, n, z)),
              (R.target = zt),
              (R.relatedTarget = x),
              (U = null),
              vl(z) === C &&
                ((et = new et(O, D + "enter", J, n, z)),
                (et.target = x),
                (et.relatedTarget = zt),
                (U = et)),
              (zt = U),
              N && J)
            )
              e: {
                for (et = gv, O = N, D = J, x = 0, U = O; U; U = et(U)) x++;
                U = 0;
                for (var tt = D; tt; tt = et(tt)) U++;
                for (; 0 < x - U; ) ((O = et(O)), x--);
                for (; 0 < U - x; ) ((D = et(D)), U--);
                for (; x--; ) {
                  if (O === D || (D !== null && O === D.alternate)) {
                    et = O;
                    break e;
                  }
                  ((O = et(O)), (D = et(D)));
                }
                et = null;
              }
            else et = null;
            (N !== null && Up(L, R, N, et, !1),
              J !== null && zt !== null && Up(L, zt, J, et, !0));
          }
        }
        t: {
          if (
            ((R = C ? da(C) : window),
            (N = R.nodeName && R.nodeName.toLowerCase()),
            N === "select" || (N === "input" && R.type === "file"))
          )
            var Dt = Fs;
          else if (Js(R))
            if ($s) Dt = xy;
            else {
              Dt = Ty;
              var $ = Ay;
            }
          else
            ((N = R.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? C && pc(C.elementType) && (Dt = Fs)
                : (Dt = Oy));
          if (Dt && (Dt = Dt(t, C))) {
            Ws(L, Dt, n, z);
            break t;
          }
          ($ && $(t, R, C),
            t === "focusout" &&
              C &&
              R.type === "number" &&
              C.memoizedProps.value != null &&
              dc(R, "number", R.value));
        }
        switch ((($ = C ? da(C) : window), t)) {
          case "focusin":
            (Js($) || $.contentEditable === "true") &&
              ((Cl = $), (Cc = C), (Ea = null));
            break;
          case "focusout":
            Ea = Cc = Cl = null;
            break;
          case "mousedown":
            Rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Rc = !1), uf(L, n, z));
            break;
          case "selectionchange":
            if (Ry) break;
          case "keydown":
          case "keyup":
            uf(L, n, z);
        }
        var ot;
        if (Ac)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          xl
            ? Is(t, n) && (mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (mt = "onCompositionStart");
        (mt &&
          (Xs &&
            n.locale !== "ko" &&
            (xl || mt !== "onCompositionStart"
              ? mt === "onCompositionEnd" && xl && (ot = ws())
              : ((An = z),
                (vc = "value" in An ? An.value : An.textContent),
                (xl = !0))),
          ($ = vi(C, mt)),
          0 < $.length &&
            ((mt = new js(mt, t, null, n, z)),
            L.push({ event: mt, listeners: $ }),
            ot
              ? (mt.data = ot)
              : ((ot = Ks(n)), ot !== null && (mt.data = ot)))),
          (ot = vy ? by(t, n) : Sy(t, n)) &&
            ((mt = vi(C, "onBeforeInput")),
            0 < mt.length &&
              (($ = new js("onBeforeInput", "beforeinput", null, n, z)),
              L.push({ event: $, listeners: mt }),
              ($.data = ot))),
          fv(L, t, C, n, z));
      }
      zp(L, e);
    });
  }
  function Ia(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function vi(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var u = t,
        c = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((u = pa(t, n)),
          u != null && l.unshift(Ia(t, u, c)),
          (u = pa(t, e)),
          u != null && l.push(Ia(t, u, c))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function gv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Up(t, e, n, l, u) {
    for (var c = e._reactName, d = []; n !== null && n !== l; ) {
      var h = n,
        E = h.alternate,
        C = h.stateNode;
      if (((h = h.tag), E !== null && E === l)) break;
      ((h !== 5 && h !== 26 && h !== 27) ||
        C === null ||
        ((E = C),
        u
          ? ((C = pa(n, c)), C != null && d.unshift(Ia(n, C, E)))
          : u || ((C = pa(n, c)), C != null && d.push(Ia(n, C, E)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var hv = /\r\n?/g,
    yv = /\u0000|\uFFFD/g;
  function Hp(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        hv,
        `
`,
      )
      .replace(yv, "");
  }
  function Gp(t, e) {
    return ((e = Hp(e)), Hp(t) === e);
  }
  function _t(t, e, n, l, u, c) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Al(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Al(t, "" + l);
        break;
      case "className":
        Du(t, "class", l);
        break;
      case "tabIndex":
        Du(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(t, n, l);
        break;
      case "style":
        Hs(t, l, c);
        break;
      case "data":
        if (e !== "object") {
          Du(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((l = Tu("" + l)), t.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (e !== "input" && _t(t, e, "name", u.name, u, null),
                _t(t, e, "formEncType", u.formEncType, u, null),
                _t(t, e, "formMethod", u.formMethod, u, null),
                _t(t, e, "formTarget", u.formTarget, u, null))
              : (_t(t, e, "encType", u.encType, u, null),
                _t(t, e, "method", u.method, u, null),
                _t(t, e, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = Tu("" + l)), t.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (t.onclick = nn);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Tu("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        (dt("beforetoggle", t), dt("toggle", t), Eu(t, "popover", l));
        break;
      case "xlinkActuate":
        en(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        en(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        en(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        en(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        en(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        en(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Eu(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Zh.get(n) || n), Eu(t, n, l));
    }
  }
  function Pr(t, e, n, l, u, c) {
    switch (n) {
      case "style":
        Hs(t, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Al(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Al(t, "" + l);
        break;
      case "onScroll":
        l != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && dt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = nn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xs.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (e = n.slice(2, u ? n.length - 7 : void 0)),
              (c = t[de] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && t.removeEventListener(e, c, u),
              typeof l == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, u));
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
                ? t.setAttribute(n, "")
                : Eu(t, n, l);
          }
    }
  }
  function ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (dt("error", t), dt("load", t));
        var l = !1,
          u = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var d = n[c];
            if (d != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  _t(t, e, c, d, n, null);
              }
          }
        (u && _t(t, e, "srcSet", n.srcSet, n, null),
          l && _t(t, e, "src", n.src, n, null));
        return;
      case "input":
        dt("invalid", t);
        var h = (c = d = u = null),
          E = null,
          C = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var z = n[l];
            if (z != null)
              switch (l) {
                case "name":
                  u = z;
                  break;
                case "type":
                  d = z;
                  break;
                case "checked":
                  E = z;
                  break;
                case "defaultChecked":
                  C = z;
                  break;
                case "value":
                  c = z;
                  break;
                case "defaultValue":
                  h = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(o(137, e));
                  break;
                default:
                  _t(t, e, l, z, n, null);
              }
          }
        _s(t, c, h, E, C, d, u, !1);
        return;
      case "select":
        (dt("invalid", t), (l = d = c = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((h = n[u]), h != null))
            switch (u) {
              case "value":
                c = h;
                break;
              case "defaultValue":
                d = h;
                break;
              case "multiple":
                l = h;
              default:
                _t(t, e, u, h, n, null);
            }
        ((e = c),
          (n = d),
          (t.multiple = !!l),
          e != null ? Dl(t, !!l, e, !1) : n != null && Dl(t, !!l, n, !0));
        return;
      case "textarea":
        (dt("invalid", t), (c = u = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((h = n[d]), h != null))
            switch (d) {
              case "value":
                l = h;
                break;
              case "defaultValue":
                u = h;
                break;
              case "children":
                c = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(91));
                break;
              default:
                _t(t, e, d, h, n, null);
            }
        Bs(t, l, u, c);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) &&
            ((l = n[E]), l != null) &&
            (E === "selected"
              ? (t.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : _t(t, e, E, l, n, null));
        return;
      case "dialog":
        (dt("beforetoggle", t),
          dt("toggle", t),
          dt("cancel", t),
          dt("close", t));
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Za.length; l++) dt(Za[l], t);
        break;
      case "image":
        (dt("error", t), dt("load", t));
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (dt("error", t), dt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                _t(t, e, C, l, n, null);
            }
        return;
      default:
        if (pc(e)) {
          for (z in n)
            n.hasOwnProperty(z) &&
              ((l = n[z]), l !== void 0 && Pr(t, e, z, l, n, void 0));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && ((l = n[h]), l != null && _t(t, e, h, l, n, null));
  }
  function vv(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          c = null,
          d = null,
          h = null,
          E = null,
          C = null,
          z = null;
        for (N in n) {
          var L = n[N];
          if (n.hasOwnProperty(N) && L != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = L;
              default:
                l.hasOwnProperty(N) || _t(t, e, N, null, l, L);
            }
        }
        for (var R in l) {
          var N = l[R];
          if (((L = n[R]), l.hasOwnProperty(R) && (N != null || L != null)))
            switch (R) {
              case "type":
                c = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                C = N;
                break;
              case "defaultChecked":
                z = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                h = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(o(137, e));
                break;
              default:
                N !== L && _t(t, e, R, N, l, L);
            }
        }
        fc(t, d, h, E, C, z, c, u);
        return;
      case "select":
        N = d = h = R = null;
        for (c in n)
          if (((E = n[c]), n.hasOwnProperty(c) && E != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                N = E;
              default:
                l.hasOwnProperty(c) || _t(t, e, c, null, l, E);
            }
        for (u in l)
          if (
            ((c = l[u]),
            (E = n[u]),
            l.hasOwnProperty(u) && (c != null || E != null))
          )
            switch (u) {
              case "value":
                R = c;
                break;
              case "defaultValue":
                h = c;
                break;
              case "multiple":
                d = c;
              default:
                c !== E && _t(t, e, u, c, l, E);
            }
        ((e = h),
          (n = d),
          (l = N),
          R != null
            ? Dl(t, !!n, R, !1)
            : !!l != !!n &&
              (e != null ? Dl(t, !!n, e, !0) : Dl(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        N = R = null;
        for (h in n)
          if (
            ((u = n[h]),
            n.hasOwnProperty(h) && u != null && !l.hasOwnProperty(h))
          )
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                _t(t, e, h, null, l, u);
            }
        for (d in l)
          if (
            ((u = l[d]),
            (c = n[d]),
            l.hasOwnProperty(d) && (u != null || c != null))
          )
            switch (d) {
              case "value":
                R = u;
                break;
              case "defaultValue":
                N = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== c && _t(t, e, d, u, l, c);
            }
        zs(t, R, N);
        return;
      case "option":
        for (var J in n)
          ((R = n[J]),
            n.hasOwnProperty(J) &&
              R != null &&
              !l.hasOwnProperty(J) &&
              (J === "selected" ? (t.selected = !1) : _t(t, e, J, null, l, R)));
        for (E in l)
          ((R = l[E]),
            (N = n[E]),
            l.hasOwnProperty(E) &&
              R !== N &&
              (R != null || N != null) &&
              (E === "selected"
                ? (t.selected =
                    R && typeof R != "function" && typeof R != "symbol")
                : _t(t, e, E, R, l, N)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n)
          ((R = n[et]),
            n.hasOwnProperty(et) &&
              R != null &&
              !l.hasOwnProperty(et) &&
              _t(t, e, et, null, l, R));
        for (C in l)
          if (
            ((R = l[C]),
            (N = n[C]),
            l.hasOwnProperty(C) && R !== N && (R != null || N != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(o(137, e));
                break;
              default:
                _t(t, e, C, R, l, N);
            }
        return;
      default:
        if (pc(e)) {
          for (var zt in n)
            ((R = n[zt]),
              n.hasOwnProperty(zt) &&
                R !== void 0 &&
                !l.hasOwnProperty(zt) &&
                Pr(t, e, zt, void 0, l, R));
          for (z in l)
            ((R = l[z]),
              (N = n[z]),
              !l.hasOwnProperty(z) ||
                R === N ||
                (R === void 0 && N === void 0) ||
                Pr(t, e, z, R, l, N));
          return;
        }
    }
    for (var O in n)
      ((R = n[O]),
        n.hasOwnProperty(O) &&
          R != null &&
          !l.hasOwnProperty(O) &&
          _t(t, e, O, null, l, R));
    for (L in l)
      ((R = l[L]),
        (N = n[L]),
        !l.hasOwnProperty(L) ||
          R === N ||
          (R == null && N == null) ||
          _t(t, e, L, R, l, N));
  }
  function Lp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var u = n[l],
          c = u.transferSize,
          d = u.initiatorType,
          h = u.duration;
        if (c && h && Lp(d)) {
          for (d = 0, h = u.responseEnd, l += 1; l < n.length; l++) {
            var E = n[l],
              C = E.startTime;
            if (C > h) break;
            var z = E.transferSize,
              L = E.initiatorType;
            z &&
              Lp(L) &&
              ((E = E.responseEnd), (d += z * (E < h ? 1 : (h - C) / (E - C))));
          }
          if ((--l, (e += (8 * (c + d)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var to = null,
    eo = null;
  function bi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function wp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qp(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function no(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lo = null;
  function Sv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === lo
        ? !1
        : ((lo = t), !0)
      : ((lo = null), !1);
  }
  var Yp = typeof setTimeout == "function" ? setTimeout : void 0,
    Ev = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jp = typeof Promise == "function" ? Promise : void 0,
    Dv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jp < "u"
          ? function (t) {
              return jp.resolve(null).then(t).catch(Av);
            }
          : Yp;
  function Av(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Yn(t) {
    return t === "head";
  }
  function Vp(t, e) {
    var n = e,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((t.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (t.removeChild(u), ta(e));
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") Ka(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), Ka(n));
          for (var c = n.firstChild; c; ) {
            var d = c.nextSibling,
              h = c.nodeName;
            (c[fa] ||
              h === "SCRIPT" ||
              h === "STYLE" ||
              (h === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(c),
              (c = d));
          }
        } else n === "body" && Ka(t.ownerDocument.body);
      n = u;
    } while (n);
    ta(e);
  }
  function Xp(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function ao(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ao(n), oc(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Tv(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[fa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ov(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Qp(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function uo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function io(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function xv(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var co = null;
  function Zp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ye(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ip(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Kp(t, e, n) {
    switch (((e = bi(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Ka(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    oc(t);
  }
  var je = new Map(),
    Jp = new Set();
  function Si(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var bn = q.d;
  q.d = { f: Cv, r: Rv, D: Nv, C: Mv, L: _v, m: zv, X: Uv, S: Bv, M: Hv };
  function Cv() {
    var t = bn.f(),
      e = fi();
    return t || e;
  }
  function Rv(t) {
    var e = bl(t);
    e !== null && e.tag === 5 && e.type === "form" ? fd(e) : bn.r(t);
  }
  var $l = typeof document > "u" ? null : document;
  function Wp(t, e, n) {
    var l = $l;
    if (l && typeof e == "string" && e) {
      var u = Be(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        Jp.has(u) ||
          (Jp.add(u),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(u) === null &&
            ((e = l.createElement("link")),
            ae(e, "link", t),
            Wt(e),
            l.head.appendChild(e))));
    }
  }
  function Nv(t) {
    (bn.D(t), Wp("dns-prefetch", t, null));
  }
  function Mv(t, e) {
    (bn.C(t, e), Wp("preconnect", t, e));
  }
  function _v(t, e, n) {
    bn.L(t, e, n);
    var l = $l;
    if (l && t && e) {
      var u = 'link[rel="preload"][as="' + Be(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + Be(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + Be(n.imageSizes) + '"]'))
        : (u += '[href="' + Be(t) + '"]');
      var c = u;
      switch (e) {
        case "style":
          c = kl(t);
          break;
        case "script":
          c = Pl(t);
      }
      je.has(c) ||
        ((t = v(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        je.set(c, t),
        l.querySelector(u) !== null ||
          (e === "style" && l.querySelector(Ja(c))) ||
          (e === "script" && l.querySelector(Wa(c))) ||
          ((e = l.createElement("link")),
          ae(e, "link", t),
          Wt(e),
          l.head.appendChild(e)));
    }
  }
  function zv(t, e) {
    bn.m(t, e);
    var n = $l;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Be(l) + '"][href="' + Be(t) + '"]',
        c = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Pl(t);
      }
      if (
        !je.has(c) &&
        ((t = v({ rel: "modulepreload", href: t }, e)),
        je.set(c, t),
        n.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wa(c))) return;
        }
        ((l = n.createElement("link")),
          ae(l, "link", t),
          Wt(l),
          n.head.appendChild(l));
      }
    }
  }
  function Bv(t, e, n) {
    bn.S(t, e, n);
    var l = $l;
    if (l && t) {
      var u = Sl(l).hoistableStyles,
        c = kl(t);
      e = e || "default";
      var d = u.get(c);
      if (!d) {
        var h = { loading: 0, preload: null };
        if ((d = l.querySelector(Ja(c)))) h.loading = 5;
        else {
          ((t = v({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = je.get(c)) && ro(t, n));
          var E = (d = l.createElement("link"));
          (Wt(E),
            ae(E, "link", t),
            (E._p = new Promise(function (C, z) {
              ((E.onload = C), (E.onerror = z));
            })),
            E.addEventListener("load", function () {
              h.loading |= 1;
            }),
            E.addEventListener("error", function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            Ei(d, e, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: h }),
          u.set(c, d));
      }
    }
  }
  function Uv(t, e) {
    bn.X(t, e);
    var n = $l;
    if (n && t) {
      var l = Sl(n).hoistableScripts,
        u = Pl(t),
        c = l.get(u);
      c ||
        ((c = n.querySelector(Wa(u))),
        c ||
          ((t = v({ src: t, async: !0 }, e)),
          (e = je.get(u)) && oo(t, e),
          (c = n.createElement("script")),
          Wt(c),
          ae(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(u, c));
    }
  }
  function Hv(t, e) {
    bn.M(t, e);
    var n = $l;
    if (n && t) {
      var l = Sl(n).hoistableScripts,
        u = Pl(t),
        c = l.get(u);
      c ||
        ((c = n.querySelector(Wa(u))),
        c ||
          ((t = v({ src: t, async: !0, type: "module" }, e)),
          (e = je.get(u)) && oo(t, e),
          (c = n.createElement("script")),
          Wt(c),
          ae(c, "link", t),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(u, c));
    }
  }
  function Fp(t, e, n, l) {
    var u = (u = rt.current) ? Si(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = kl(n.href)),
            (n = Sl(u).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = kl(n.href);
          var c = Sl(u).hoistableStyles,
            d = c.get(t);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, d),
              (c = u.querySelector(Ja(t))) &&
                !c._p &&
                ((d.instance = c), (d.state.loading = 5)),
              je.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                je.set(t, n),
                c || Gv(u, t, n, d.state))),
            e && l === null)
          )
            throw Error(o(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Pl(n)),
              (n = Sl(u).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function kl(t) {
    return 'href="' + Be(t) + '"';
  }
  function Ja(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function $p(t) {
    return v({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Gv(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ae(e, "link", n),
        Wt(e),
        t.head.appendChild(e));
  }
  function Pl(t) {
    return '[src="' + Be(t) + '"]';
  }
  function Wa(t) {
    return "script[async]" + t;
  }
  function kp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Be(n.href) + '"]');
          if (l) return ((e.instance = l), Wt(l), l);
          var u = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Wt(l),
            ae(l, "style", u),
            Ei(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          u = kl(n.href);
          var c = t.querySelector(Ja(u));
          if (c) return ((e.state.loading |= 4), (e.instance = c), Wt(c), c);
          ((l = $p(n)),
            (u = je.get(u)) && ro(l, u),
            (c = (t.ownerDocument || t).createElement("link")),
            Wt(c));
          var d = c;
          return (
            (d._p = new Promise(function (h, E) {
              ((d.onload = h), (d.onerror = E));
            })),
            ae(c, "link", l),
            (e.state.loading |= 4),
            Ei(c, n.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Pl(n.src)),
            (u = t.querySelector(Wa(c)))
              ? ((e.instance = u), Wt(u), u)
              : ((l = n),
                (u = je.get(c)) && ((l = v({}, n)), oo(l, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Wt(u),
                ae(u, "link", l),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Ei(l, n.precedence, t));
    return e.instance;
  }
  function Ei(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = l.length ? l[l.length - 1] : null,
        c = u,
        d = 0;
      d < l.length;
      d++
    ) {
      var h = l[d];
      if (h.dataset.precedence === e) c = h;
      else if (c !== u) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function ro(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function oo(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Di = null;
  function Pp(t, e, n) {
    if (Di === null) {
      var l = new Map(),
        u = (Di = new Map());
      u.set(n, l);
    } else ((u = Di), (l = u.get(n)), l || ((l = new Map()), u.set(n, l)));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), u = 0;
      u < n.length;
      u++
    ) {
      var c = n[u];
      if (
        !(
          c[fa] ||
          c[te] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = c.getAttribute(e) || "";
        d = t + d;
        var h = l.get(d);
        h ? h.push(c) : l.set(d, [c]);
      }
    }
    return l;
  }
  function tm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Lv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function em(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function wv(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = kl(l.href),
          c = e.querySelector(Ja(u));
        if (c) {
          ((e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Ai.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = c),
            Wt(c));
          return;
        }
        ((c = e.ownerDocument || e),
          (l = $p(l)),
          (u = je.get(u)) && ro(l, u),
          (c = c.createElement("link")),
          Wt(c));
        var d = c;
        ((d._p = new Promise(function (h, E) {
          ((d.onload = h), (d.onerror = E));
        })),
          ae(c, "link", l),
          (n.instance = c));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Ai.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var so = 0;
  function qv(t, e) {
    return (
      t.stylesheets && t.count === 0 && Oi(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Oi(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend;
                ((t.unsuspend = null), c());
              }
            }, 6e4 + e);
            0 < t.imgBytes && so === 0 && (so = 62500 * bv());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Oi(t, t.stylesheets), t.unsuspend))
                ) {
                  var c = t.unsuspend;
                  ((t.unsuspend = null), c());
                }
              },
              (t.imgBytes > so ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Ai() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Oi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ti = null;
  function Oi(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ti = new Map()),
        e.forEach(Yv, t),
        (Ti = null),
        Ai.call(t)));
  }
  function Yv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ti.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Ti.set(t, n));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < u.length;
          c++
        ) {
          var d = u[c];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((u = e.instance),
        (d = u.getAttribute("data-precedence")),
        (c = n.get(d) || l),
        c === l && n.set(null, u),
        n.set(d, u),
        this.count++,
        (l = Ai.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        c
          ? c.parentNode.insertBefore(u, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Fa = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function jv(t, e, n, l, u, c, d, h, E) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = uc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = uc(0)),
      (this.hiddenUpdates = uc(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function nm(t, e, n, l, u, c, d, h, E, C, z, L) {
    return (
      (t = new jv(t, e, n, d, E, C, z, L, h)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = Ae(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Xc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Kc(c),
      t
    );
  }
  function lm(t) {
    return t ? ((t = Ml), t) : Ml;
  }
  function am(t, e, n, l, u, c) {
    ((u = lm(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = Nn(e)),
      (l.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (n = Mn(t, l, e)),
      n !== null && (ve(n, t, e), Ra(n, t, e)));
  }
  function um(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function fo(t, e) {
    (um(t, e), (t = t.alternate) && um(t, e));
  }
  function im(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = el(t, 67108864);
      (e !== null && ve(e, t, 67108864), fo(t, 67108864));
    }
  }
  function cm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Re();
      e = ic(e);
      var n = el(t, e);
      (n !== null && ve(n, t, e), fo(t, e));
    }
  }
  var xi = !0;
  function Vv(t, e, n, l) {
    var u = M.T;
    M.T = null;
    var c = q.p;
    try {
      ((q.p = 2), po(t, e, n, l));
    } finally {
      ((q.p = c), (M.T = u));
    }
  }
  function Xv(t, e, n, l) {
    var u = M.T;
    M.T = null;
    var c = q.p;
    try {
      ((q.p = 8), po(t, e, n, l));
    } finally {
      ((q.p = c), (M.T = u));
    }
  }
  function po(t, e, n, l) {
    if (xi) {
      var u = mo(l);
      if (u === null) (kr(t, e, l, Ci, n), om(t, l));
      else if (Zv(u, t, e, n, l)) l.stopPropagation();
      else if ((om(t, l), e & 4 && -1 < Qv.indexOf(t))) {
        for (; u !== null; ) {
          var c = bl(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var d = Fn(c.pendingLanes);
                  if (d !== 0) {
                    var h = c;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                      var E = 1 << (31 - Ee(d));
                      ((h.entanglements[1] |= E), (d &= ~E));
                    }
                    (ke(c), (Tt & 6) === 0 && ((oi = be() + 500), Qa(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((h = el(c, 2)), h !== null && ve(h, c, 2), fi(), fo(c, 2));
            }
          if (((c = mo(l)), c === null && kr(t, e, l, Ci, n), c === u)) break;
          u = c;
        }
        u !== null && l.stopPropagation();
      } else kr(t, e, l, null, n);
    }
  }
  function mo(t) {
    return ((t = gc(t)), go(t));
  }
  var Ci = null;
  function go(t) {
    if (((Ci = null), (t = vl(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Ci = t), null);
  }
  function rm(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Nh()) {
          case gs:
            return 2;
          case hs:
            return 8;
          case hu:
          case Mh:
            return 32;
          case ys:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ho = !1,
    jn = null,
    Vn = null,
    Xn = null,
    $a = new Map(),
    ka = new Map(),
    Qn = [],
    Qv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function om(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Vn = null;
        break;
      case "mouseover":
      case "mouseout":
        Xn = null;
        break;
      case "pointerover":
      case "pointerout":
        $a.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ka.delete(e.pointerId);
    }
  }
  function Pa(t, e, n, l, u, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [u],
        }),
        e !== null && ((e = bl(e)), e !== null && im(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Zv(t, e, n, l, u) {
    switch (e) {
      case "focusin":
        return ((jn = Pa(jn, t, e, n, l, u)), !0);
      case "dragenter":
        return ((Vn = Pa(Vn, t, e, n, l, u)), !0);
      case "mouseover":
        return ((Xn = Pa(Xn, t, e, n, l, u)), !0);
      case "pointerover":
        var c = u.pointerId;
        return ($a.set(c, Pa($a.get(c) || null, t, e, n, l, u)), !0);
      case "gotpointercapture":
        return (
          (c = u.pointerId),
          ka.set(c, Pa(ka.get(c) || null, t, e, n, l, u)),
          !0
        );
    }
    return !1;
  }
  function sm(t) {
    var e = vl(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              As(t.priority, function () {
                cm(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = y(n)), e !== null)) {
            ((t.blockedOn = e),
              As(t.priority, function () {
                cm(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ri(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = mo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((mc = l), n.target.dispatchEvent(l), (mc = null));
      } else return ((e = bl(n)), e !== null && im(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function fm(t, e, n) {
    Ri(t) && n.delete(e);
  }
  function Iv() {
    ((ho = !1),
      jn !== null && Ri(jn) && (jn = null),
      Vn !== null && Ri(Vn) && (Vn = null),
      Xn !== null && Ri(Xn) && (Xn = null),
      $a.forEach(fm),
      ka.forEach(fm));
  }
  function Ni(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      ho ||
        ((ho = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Iv)));
  }
  var Mi = null;
  function dm(t) {
    Mi !== t &&
      ((Mi = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Mi === t && (Mi = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            u = t[e + 2];
          if (typeof l != "function") {
            if (go(l || n) === null) continue;
            break;
          }
          var c = bl(n);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            pr(c, { pending: !0, data: u, method: n.method, action: l }, l, u));
        }
      }));
  }
  function ta(t) {
    function e(E) {
      return Ni(E, t);
    }
    (jn !== null && Ni(jn, t),
      Vn !== null && Ni(Vn, t),
      Xn !== null && Ni(Xn, t),
      $a.forEach(e),
      ka.forEach(e));
    for (var n = 0; n < Qn.length; n++) {
      var l = Qn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      (sm(n), n.blockedOn === null && Qn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var u = n[l],
          c = n[l + 1],
          d = u[de] || null;
        if (typeof c == "function") d || dm(n);
        else if (d) {
          var h = null;
          if (c && c.hasAttribute("formAction")) {
            if (((u = c), (d = c[de] || null))) h = d.formAction;
            else if (go(u) !== null) continue;
          } else h = d.action;
          (typeof h == "function" ? (n[l + 1] = h) : (n.splice(l, 3), (l -= 3)),
            dm(n));
        }
      }
  }
  function pm() {
    function t(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function yo(t) {
    this._internalRoot = t;
  }
  ((_i.prototype.render = yo.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        l = Re();
      am(n, l, t, e, null, null);
    }),
    (_i.prototype.unmount = yo.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (am(t.current, 2, null, t, null, null), fi(), (e[yl] = null));
        }
      }));
  function _i(t) {
    this._internalRoot = t;
  }
  _i.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Ds();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Qn.length && e !== 0 && e < Qn[n].priority; n++);
      (Qn.splice(n, 0, t), n === 0 && sm(t));
    }
  };
  var mm = i.version;
  if (mm !== "19.2.4") throw Error(o(527, mm, "19.2.4"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? S(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Kv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zi.isDisabled && zi.supportsFiber)
      try {
        ((ra = zi.inject(Kv)), (Se = zi));
      } catch {}
  }
  return (
    (eu.createRoot = function (t, e) {
      if (!s(t)) throw Error(o(299));
      var n = !1,
        l = "",
        u = Ed,
        c = Dd,
        d = Ad;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = nm(t, 1, !1, null, null, n, l, null, u, c, d, pm)),
        (t[yl] = e.current),
        $r(t),
        new yo(e)
      );
    }),
    (eu.hydrateRoot = function (t, e, n) {
      if (!s(t)) throw Error(o(299));
      var l = !1,
        u = "",
        c = Ed,
        d = Dd,
        h = Ad,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (h = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (e = nm(t, 1, !0, e, n ?? null, l, u, E, c, d, h, pm)),
        (e.context = lm(null)),
        (n = e.current),
        (l = Re()),
        (l = ic(l)),
        (u = Nn(l)),
        (u.callback = null),
        Mn(n, u, l),
        (n = l),
        (e.current.lanes = n),
        sa(e, n),
        ke(e),
        (t[yl] = e.current),
        $r(t),
        new _i(e)
      );
    }),
    (eu.version = "19.2.4"),
    eu
  );
}
var Tm;
function nb() {
  if (Tm) return So.exports;
  Tm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (So.exports = eb()), So.exports);
}
var lb = nb(),
  Zo = mg();
const ab = pg(Zo);
function fe(a) {
  return `Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
var ub = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Om = ub,
  xm = () => Math.random().toString(36).substring(7).split("").join("."),
  ib = { INIT: `@@redux/INIT${xm()}`, REPLACE: `@@redux/REPLACE${xm()}` },
  Cm = ib;
function cb(a) {
  if (typeof a != "object" || a === null) return !1;
  let i = a;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(a) === i || Object.getPrototypeOf(a) === null;
}
function gg(a, i, r) {
  if (typeof a != "function") throw new Error(fe(2));
  if (
    (typeof i == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(fe(0));
  if (
    (typeof i == "function" && typeof r > "u" && ((r = i), (i = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(fe(1));
    return r(gg)(a, i);
  }
  let o = a,
    s = i,
    f = new Map(),
    p = f,
    y = 0,
    g = !1;
  function m() {
    p === f &&
      ((p = new Map()),
      f.forEach((B, Y) => {
        p.set(Y, B);
      }));
  }
  function S() {
    if (g) throw new Error(fe(3));
    return s;
  }
  function v(B) {
    if (typeof B != "function") throw new Error(fe(4));
    if (g) throw new Error(fe(5));
    let Y = !0;
    m();
    const V = y++;
    return (
      p.set(V, B),
      function () {
        if (Y) {
          if (g) throw new Error(fe(6));
          ((Y = !1), m(), p.delete(V), (f = null));
        }
      }
    );
  }
  function b(B) {
    if (!cb(B)) throw new Error(fe(7));
    if (typeof B.type > "u") throw new Error(fe(8));
    if (typeof B.type != "string") throw new Error(fe(17));
    if (g) throw new Error(fe(9));
    try {
      ((g = !0), (s = o(s, B)));
    } finally {
      g = !1;
    }
    return (
      (f = p).forEach((V) => {
        V();
      }),
      B
    );
  }
  function A(B) {
    if (typeof B != "function") throw new Error(fe(10));
    ((o = B), b({ type: Cm.REPLACE }));
  }
  function _() {
    const B = v;
    return {
      subscribe(Y) {
        if (typeof Y != "object" || Y === null) throw new Error(fe(11));
        function V() {
          const Q = Y;
          Q.next && Q.next(S());
        }
        return (V(), { unsubscribe: B(V) });
      },
      [Om]() {
        return this;
      },
    };
  }
  return (
    b({ type: Cm.INIT }),
    { dispatch: b, subscribe: v, getState: S, replaceReducer: A, [Om]: _ }
  );
}
function Rm(a, i) {
  return function (...r) {
    return i(a.apply(this, r));
  };
}
function Nm(a, i) {
  if (typeof a == "function") return Rm(a, i);
  if (typeof a != "object" || a === null) throw new Error(fe(16));
  const r = {};
  for (const o in a) {
    const s = a[o];
    typeof s == "function" && (r[o] = Rm(s, i));
  }
  return r;
}
function hg(...a) {
  return a.length === 0
    ? (i) => i
    : a.length === 1
      ? a[0]
      : a.reduce(
          (i, r) =>
            (...o) =>
              i(r(...o)),
        );
}
function rb(...a) {
  return (i) => (r, o) => {
    const s = i(r, o);
    let f = () => {
      throw new Error(fe(15));
    };
    const p = { getState: s.getState, dispatch: (g, ...m) => f(g, ...m) },
      y = a.map((g) => g(p));
    return ((f = hg(...y)(s.dispatch)), { ...s, dispatch: f });
  };
}
var To = { exports: {} },
  Oo = {};
var Mm;
function ob() {
  if (Mm) return Oo;
  Mm = 1;
  var a = Ii();
  function i(g, m) {
    return (g === m && (g !== 0 || 1 / g === 1 / m)) || (g !== g && m !== m);
  }
  var r = typeof Object.is == "function" ? Object.is : i,
    o = a.useSyncExternalStore,
    s = a.useRef,
    f = a.useEffect,
    p = a.useMemo,
    y = a.useDebugValue;
  return (
    (Oo.useSyncExternalStoreWithSelector = function (g, m, S, v, b) {
      var A = s(null);
      if (A.current === null) {
        var _ = { hasValue: !1, value: null };
        A.current = _;
      } else _ = A.current;
      A = p(
        function () {
          function B(W) {
            if (!Y) {
              if (((Y = !0), (V = W), (W = v(W)), b !== void 0 && _.hasValue)) {
                var F = _.value;
                if (b(F, W)) return (I = F);
              }
              return (I = W);
            }
            if (((F = I), r(V, W))) return F;
            var Z = v(W);
            return b !== void 0 && b(F, Z) ? ((V = W), F) : ((V = W), (I = Z));
          }
          var Y = !1,
            V,
            I,
            Q = S === void 0 ? null : S;
          return [
            function () {
              return B(m());
            },
            Q === null
              ? void 0
              : function () {
                  return B(Q());
                },
          ];
        },
        [m, S, v, b],
      );
      var H = o(g, A[0], A[1]);
      return (
        f(
          function () {
            ((_.hasValue = !0), (_.value = H));
          },
          [H],
        ),
        y(H),
        H
      );
    }),
    Oo
  );
}
var _m;
function sb() {
  return (_m || ((_m = 1), (To.exports = ob())), To.exports);
}
sb();
var fb = X.version.startsWith("19"),
  db = Symbol.for(fb ? "react.transitional.element" : "react.element"),
  pb = Symbol.for("react.portal"),
  mb = Symbol.for("react.fragment"),
  gb = Symbol.for("react.strict_mode"),
  hb = Symbol.for("react.profiler"),
  yb = Symbol.for("react.consumer"),
  vb = Symbol.for("react.context"),
  yg = Symbol.for("react.forward_ref"),
  bb = Symbol.for("react.suspense"),
  Sb = Symbol.for("react.suspense_list"),
  Io = Symbol.for("react.memo"),
  Eb = Symbol.for("react.lazy"),
  Db = yg,
  Ab = Io;
function Tb(a) {
  if (typeof a == "object" && a !== null) {
    const { $$typeof: i } = a;
    switch (i) {
      case db:
        switch (((a = a.type), a)) {
          case mb:
          case hb:
          case gb:
          case bb:
          case Sb:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case vb:
              case yg:
              case Eb:
              case Io:
                return a;
              case yb:
                return a;
              default:
                return i;
            }
        }
      case pb:
        return i;
    }
  }
}
function Ob(a) {
  return Tb(a) === Io;
}
function xb(
  a,
  i,
  r,
  o,
  { areStatesEqual: s, areOwnPropsEqual: f, areStatePropsEqual: p },
) {
  let y = !1,
    g,
    m,
    S,
    v,
    b;
  function A(V, I) {
    return (
      (g = V),
      (m = I),
      (S = a(g, m)),
      (v = i(o, m)),
      (b = r(S, v, m)),
      (y = !0),
      b
    );
  }
  function _() {
    return (
      (S = a(g, m)),
      i.dependsOnOwnProps && (v = i(o, m)),
      (b = r(S, v, m)),
      b
    );
  }
  function H() {
    return (
      a.dependsOnOwnProps && (S = a(g, m)),
      i.dependsOnOwnProps && (v = i(o, m)),
      (b = r(S, v, m)),
      b
    );
  }
  function B() {
    const V = a(g, m),
      I = !p(V, S);
    return ((S = V), I && (b = r(S, v, m)), b);
  }
  function Y(V, I) {
    const Q = !f(I, m),
      W = !s(V, g, I, m);
    return ((g = V), (m = I), Q && W ? _() : Q ? H() : W ? B() : b);
  }
  return function (I, Q) {
    return y ? Y(I, Q) : A(I, Q);
  };
}
function Cb(
  a,
  {
    initMapStateToProps: i,
    initMapDispatchToProps: r,
    initMergeProps: o,
    ...s
  },
) {
  const f = i(a, s),
    p = r(a, s),
    y = o(a, s);
  return xb(f, p, y, a, s);
}
function Rb(a, i) {
  const r = {};
  for (const o in a) {
    const s = a[o];
    typeof s == "function" && (r[o] = (...f) => i(s(...f)));
  }
  return r;
}
function Lo(a) {
  return function (r) {
    const o = a(r);
    function s() {
      return o;
    }
    return ((s.dependsOnOwnProps = !1), s);
  };
}
function zm(a) {
  return a.dependsOnOwnProps ? !!a.dependsOnOwnProps : a.length !== 1;
}
function vg(a, i) {
  return function (o, { displayName: s }) {
    const f = function (y, g) {
      return f.dependsOnOwnProps ? f.mapToProps(y, g) : f.mapToProps(y, void 0);
    };
    return (
      (f.dependsOnOwnProps = !0),
      (f.mapToProps = function (y, g) {
        ((f.mapToProps = a), (f.dependsOnOwnProps = zm(a)));
        let m = f(y, g);
        return (
          typeof m == "function" &&
            ((f.mapToProps = m), (f.dependsOnOwnProps = zm(m)), (m = f(y, g))),
          m
        );
      }),
      f
    );
  };
}
function Ko(a, i) {
  return (r, o) => {
    throw new Error(
      `Invalid value of type ${typeof a} for ${i} argument when connecting component ${o.wrappedComponentName}.`,
    );
  };
}
function Nb(a) {
  return a && typeof a == "object"
    ? Lo((i) => Rb(a, i))
    : a
      ? typeof a == "function"
        ? vg(a)
        : Ko(a, "mapDispatchToProps")
      : Lo((i) => ({ dispatch: i }));
}
function Mb(a) {
  return a
    ? typeof a == "function"
      ? vg(a)
      : Ko(a, "mapStateToProps")
    : Lo(() => ({}));
}
function _b(a, i, r) {
  return { ...r, ...a, ...i };
}
function zb(a) {
  return function (r, { displayName: o, areMergedPropsEqual: s }) {
    let f = !1,
      p;
    return function (g, m, S) {
      const v = a(g, m, S);
      return (f ? s(v, p) || (p = v) : ((f = !0), (p = v)), p);
    };
  };
}
function Bb(a) {
  return a ? (typeof a == "function" ? zb(a) : Ko(a, "mergeProps")) : () => _b;
}
function Ub(a) {
  a();
}
function Hb() {
  let a = null,
    i = null;
  return {
    clear() {
      ((a = null), (i = null));
    },
    notify() {
      Ub(() => {
        let r = a;
        for (; r; ) (r.callback(), (r = r.next));
      });
    },
    get() {
      const r = [];
      let o = a;
      for (; o; ) (r.push(o), (o = o.next));
      return r;
    },
    subscribe(r) {
      let o = !0;
      const s = (i = { callback: r, next: null, prev: i });
      return (
        s.prev ? (s.prev.next = s) : (a = s),
        function () {
          !o ||
            a === null ||
            ((o = !1),
            s.next ? (s.next.prev = s.prev) : (i = s.prev),
            s.prev ? (s.prev.next = s.next) : (a = s.next));
        }
      );
    },
  };
}
var Bm = { notify() {}, get: () => [] };
function bg(a, i) {
  let r,
    o = Bm,
    s = 0,
    f = !1;
  function p(H) {
    S();
    const B = o.subscribe(H);
    let Y = !1;
    return () => {
      Y || ((Y = !0), B(), v());
    };
  }
  function y() {
    o.notify();
  }
  function g() {
    _.onStateChange && _.onStateChange();
  }
  function m() {
    return f;
  }
  function S() {
    (s++, r || ((r = i ? i.addNestedSub(g) : a.subscribe(g)), (o = Hb())));
  }
  function v() {
    (s--, r && s === 0 && (r(), (r = void 0), o.clear(), (o = Bm)));
  }
  function b() {
    f || ((f = !0), S());
  }
  function A() {
    f && ((f = !1), v());
  }
  const _ = {
    addNestedSub: p,
    notifyNestedSubs: y,
    handleChangeWrapper: g,
    isSubscribed: m,
    trySubscribe: b,
    tryUnsubscribe: A,
    getListeners: () => o,
  };
  return _;
}
var Gb = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lb = Gb(),
  wb = () => typeof navigator < "u" && navigator.product === "ReactNative",
  qb = wb(),
  Yb = () => (Lb || qb ? X.useLayoutEffect : X.useEffect),
  Li = Yb();
function Um(a, i) {
  return a === i ? a !== 0 || i !== 0 || 1 / a === 1 / i : a !== a && i !== i;
}
function xo(a, i) {
  if (Um(a, i)) return !0;
  if (typeof a != "object" || a === null || typeof i != "object" || i === null)
    return !1;
  const r = Object.keys(a),
    o = Object.keys(i);
  if (r.length !== o.length) return !1;
  for (let s = 0; s < r.length; s++)
    if (!Object.prototype.hasOwnProperty.call(i, r[s]) || !Um(a[r[s]], i[r[s]]))
      return !1;
  return !0;
}
var jb = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Vb = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Xb = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Sg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Qb = { [Db]: Xb, [Ab]: Sg };
function Hm(a) {
  return Ob(a) ? Sg : Qb[a.$$typeof] || jb;
}
var Zb = Object.defineProperty,
  Ib = Object.getOwnPropertyNames,
  Gm = Object.getOwnPropertySymbols,
  Kb = Object.getOwnPropertyDescriptor,
  Jb = Object.getPrototypeOf,
  Lm = Object.prototype;
function wo(a, i) {
  if (typeof i != "string") {
    if (Lm) {
      const f = Jb(i);
      f && f !== Lm && wo(a, f);
    }
    let r = Ib(i);
    Gm && (r = r.concat(Gm(i)));
    const o = Hm(a),
      s = Hm(i);
    for (let f = 0; f < r.length; ++f) {
      const p = r[f];
      if (!Vb[p] && !(s && s[p]) && !(o && o[p])) {
        const y = Kb(i, p);
        try {
          Zb(a, p, y);
        } catch {}
      }
    }
  }
  return a;
}
var Wb = Symbol.for("react-redux-context"),
  Fb = typeof globalThis < "u" ? globalThis : {};
function $b() {
  if (!X.createContext) return {};
  const a = (Fb[Wb] ??= new Map());
  let i = a.get(X.createContext);
  return (i || ((i = X.createContext(null)), a.set(X.createContext, i)), i);
}
var Eg = $b(),
  kb = [null, null];
function Pb(a, i, r) {
  Li(() => a(...i), r);
}
function t0(a, i, r, o, s, f) {
  ((a.current = o), (r.current = !1), s.current && ((s.current = null), f()));
}
function e0(a, i, r, o, s, f, p, y, g, m, S) {
  if (!a) return () => {};
  let v = !1,
    b = null;
  const A = () => {
    if (v || !y.current) return;
    const H = i.getState();
    let B, Y;
    try {
      B = o(H, s.current);
    } catch (V) {
      ((Y = V), (b = V));
    }
    (Y || (b = null),
      B === f.current
        ? p.current || m()
        : ((f.current = B), (g.current = B), (p.current = !0), S()));
  };
  return (
    (r.onStateChange = A),
    r.trySubscribe(),
    A(),
    () => {
      if (((v = !0), r.tryUnsubscribe(), (r.onStateChange = null), b)) throw b;
    }
  );
}
function n0(a, i) {
  return a === i;
}
function l0(
  a,
  i,
  r,
  {
    pure: o,
    areStatesEqual: s = n0,
    areOwnPropsEqual: f = xo,
    areStatePropsEqual: p = xo,
    areMergedPropsEqual: y = xo,
    forwardRef: g = !1,
    context: m = Eg,
  } = {},
) {
  const S = m,
    v = Mb(a),
    b = Nb(i),
    A = Bb(r),
    _ = !!a;
  return (B) => {
    const Y = B.displayName || B.name || "Component",
      V = `Connect(${Y})`,
      I = {
        shouldHandleStateChanges: _,
        displayName: V,
        wrappedComponentName: Y,
        WrappedComponent: B,
        initMapStateToProps: v,
        initMapDispatchToProps: b,
        initMergeProps: A,
        areStatesEqual: s,
        areStatePropsEqual: p,
        areOwnPropsEqual: f,
        areMergedPropsEqual: y,
      };
    function Q(Z) {
      const [it, Ht, yt] = X.useMemo(() => {
          const { reactReduxForwardedRef: ce, ...Sn } = Z;
          return [Z.context, ce, Sn];
        }, [Z]),
        bt = X.useMemo(() => {
          let ce = S;
          return (it?.Consumer, ce);
        }, [it, S]),
        Ot = X.useContext(bt),
        nt = !!Z.store && !!Z.store.getState && !!Z.store.dispatch,
        st = !!Ot && !!Ot.store,
        gt = nt ? Z.store : Ot.store,
        M = st ? Ot.getServerState : gt.getState,
        q = X.useMemo(() => Cb(gt.dispatch, I), [gt]),
        [k, Et] = X.useMemo(() => {
          if (!_) return kb;
          const ce = bg(gt, nt ? void 0 : Ot.subscription),
            Sn = ce.notifyNestedSubs.bind(ce);
          return [ce, Sn];
        }, [gt, nt, Ot]),
        xt = X.useMemo(
          () => (nt ? Ot : { ...Ot, subscription: k }),
          [nt, Ot, k],
        ),
        T = X.useRef(void 0),
        G = X.useRef(yt),
        j = X.useRef(void 0),
        K = X.useRef(!1),
        at = X.useRef(!1),
        rt = X.useRef(void 0);
      Li(
        () => (
          (at.current = !0),
          () => {
            at.current = !1;
          }
        ),
        [],
      );
      const St = X.useMemo(
          () => () =>
            j.current && yt === G.current ? j.current : q(gt.getState(), yt),
          [gt, yt],
        ),
        Pt = X.useMemo(
          () => (Sn) =>
            k ? e0(_, gt, k, q, G, T, K, at, j, Et, Sn) : () => {},
          [k],
        );
      Pb(t0, [G, T, K, yt, j, Et]);
      let Ut;
      try {
        Ut = X.useSyncExternalStore(Pt, St, M ? () => q(M(), yt) : St);
      } catch (ce) {
        throw (
          rt.current &&
            (ce.message += `
The error may be correlated with this previous error:
${rt.current.stack}

`),
          ce
        );
      }
      Li(() => {
        ((rt.current = void 0), (j.current = void 0), (T.current = Ut));
      });
      const tn = X.useMemo(
        () => X.createElement(B, { ...Ut, ref: Ht }),
        [Ht, B, Ut],
      );
      return X.useMemo(
        () => (_ ? X.createElement(bt.Provider, { value: xt }, tn) : tn),
        [bt, tn, xt],
      );
    }
    const F = X.memo(Q);
    if (((F.WrappedComponent = B), (F.displayName = Q.displayName = V), g)) {
      const it = X.forwardRef(function (yt, bt) {
        return X.createElement(F, { ...yt, reactReduxForwardedRef: bt });
      });
      return ((it.displayName = V), (it.WrappedComponent = B), wo(it, B));
    }
    return wo(F, B);
  };
}
var Dg = l0;
function a0(a) {
  const { children: i, context: r, serverState: o, store: s } = a,
    f = X.useMemo(() => {
      const g = bg(s);
      return {
        store: s,
        subscription: g,
        getServerState: o ? () => o : void 0,
      };
    }, [s, o]),
    p = X.useMemo(() => s.getState(), [s]);
  Li(() => {
    const { subscription: g } = f;
    return (
      (g.onStateChange = g.notifyNestedSubs),
      g.trySubscribe(),
      p !== s.getState() && g.notifyNestedSubs(),
      () => {
        (g.tryUnsubscribe(), (g.onStateChange = void 0));
      }
    );
  }, [f, p]);
  const y = r || Eg;
  return X.createElement(y.Provider, { value: f }, i);
}
var u0 = a0,
  i0 = "Invariant failed";
function c0(a, i) {
  throw new Error(i0);
}
var Je = function (i) {
    var r = i.top,
      o = i.right,
      s = i.bottom,
      f = i.left,
      p = o - f,
      y = s - r,
      g = {
        top: r,
        right: o,
        bottom: s,
        left: f,
        width: p,
        height: y,
        x: f,
        y: r,
        center: { x: (o + f) / 2, y: (s + r) / 2 },
      };
    return g;
  },
  Jo = function (i, r) {
    return {
      top: i.top - r.top,
      left: i.left - r.left,
      bottom: i.bottom + r.bottom,
      right: i.right + r.right,
    };
  },
  wm = function (i, r) {
    return {
      top: i.top + r.top,
      left: i.left + r.left,
      bottom: i.bottom - r.bottom,
      right: i.right - r.right,
    };
  },
  r0 = function (i, r) {
    return {
      top: i.top + r.y,
      left: i.left + r.x,
      bottom: i.bottom + r.y,
      right: i.right + r.x,
    };
  },
  Co = { top: 0, right: 0, bottom: 0, left: 0 },
  Wo = function (i) {
    var r = i.borderBox,
      o = i.margin,
      s = o === void 0 ? Co : o,
      f = i.border,
      p = f === void 0 ? Co : f,
      y = i.padding,
      g = y === void 0 ? Co : y,
      m = Je(Jo(r, s)),
      S = Je(wm(r, p)),
      v = Je(wm(S, g));
    return {
      marginBox: m,
      borderBox: Je(r),
      paddingBox: S,
      contentBox: v,
      margin: s,
      border: p,
      padding: g,
    };
  },
  Ve = function (i) {
    var r = i.slice(0, -2),
      o = i.slice(-2);
    if (o !== "px") return 0;
    var s = Number(r);
    return (isNaN(s) && c0(), s);
  },
  o0 = function () {
    return { x: window.pageXOffset, y: window.pageYOffset };
  },
  wi = function (i, r) {
    var o = i.borderBox,
      s = i.border,
      f = i.margin,
      p = i.padding,
      y = r0(o, r);
    return Wo({ borderBox: y, border: s, margin: f, padding: p });
  },
  qi = function (i, r) {
    return (r === void 0 && (r = o0()), wi(i, r));
  },
  Ag = function (i, r) {
    var o = {
        top: Ve(r.marginTop),
        right: Ve(r.marginRight),
        bottom: Ve(r.marginBottom),
        left: Ve(r.marginLeft),
      },
      s = {
        top: Ve(r.paddingTop),
        right: Ve(r.paddingRight),
        bottom: Ve(r.paddingBottom),
        left: Ve(r.paddingLeft),
      },
      f = {
        top: Ve(r.borderTopWidth),
        right: Ve(r.borderRightWidth),
        bottom: Ve(r.borderBottomWidth),
        left: Ve(r.borderLeftWidth),
      };
    return Wo({ borderBox: i, margin: o, padding: s, border: f });
  },
  Tg = function (i) {
    var r = i.getBoundingClientRect(),
      o = window.getComputedStyle(i);
    return Ag(r, o);
  },
  cu = function (i) {
    var r = [],
      o = null,
      s = function () {
        for (var p = arguments.length, y = new Array(p), g = 0; g < p; g++)
          y[g] = arguments[g];
        ((r = y),
          !o &&
            (o = requestAnimationFrame(function () {
              ((o = null), i.apply(void 0, r));
            })));
      };
    return (
      (s.cancel = function () {
        o && (cancelAnimationFrame(o), (o = null));
      }),
      s
    );
  };
function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            for (var o in r) ({}).hasOwnProperty.call(r, o) && (a[o] = r[o]);
          }
          return a;
        }),
    Yi.apply(null, arguments)
  );
}
function Og(a, i) {}
Og.bind(null, "warn");
Og.bind(null, "error");
function In() {}
function s0(a, i) {
  return { ...a, ...i };
}
function Xe(a, i, r) {
  const o = i.map((s) => {
    const f = s0(r, s.options);
    return (
      a.addEventListener(s.eventName, s.fn, f),
      function () {
        a.removeEventListener(s.eventName, s.fn, f);
      }
    );
  });
  return function () {
    o.forEach((f) => {
      f();
    });
  };
}
const f0 = "Invariant failed";
class ji extends Error {}
ji.prototype.toString = function () {
  return this.message;
};
function w(a, i) {
  throw new ji(f0);
}
class d0 extends Xt.Component {
  constructor(...i) {
    (super(...i),
      (this.callbacks = null),
      (this.unbind = In),
      (this.onWindowError = (r) => {
        const o = this.getCallbacks();
        (o.isDragging() && o.tryAbort(),
          r.error instanceof ji && r.preventDefault());
      }),
      (this.getCallbacks = () => {
        if (!this.callbacks)
          throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
        return this.callbacks;
      }),
      (this.setCallbacks = (r) => {
        this.callbacks = r;
      }));
  }
  componentDidMount() {
    this.unbind = Xe(window, [{ eventName: "error", fn: this.onWindowError }]);
  }
  componentDidCatch(i) {
    if (i instanceof ji) {
      this.setState({});
      return;
    }
    throw i;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const p0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  Vi = (a) => a + 1,
  m0 = (a) => `
  You have lifted an item in position ${Vi(a.source.index)}
`,
  xg = (a, i) => {
    const r = a.droppableId === i.droppableId,
      o = Vi(a.index),
      s = Vi(i.index);
    return r
      ? `
      You have moved the item from position ${o}
      to position ${s}
    `
      : `
    You have moved the item from position ${o}
    in list ${a.droppableId}
    to list ${i.droppableId}
    in position ${s}
  `;
  },
  Cg = (a, i, r) =>
    i.droppableId === r.droppableId
      ? `
      The item ${a}
      has been combined with ${r.draggableId}`
      : `
      The item ${a}
      in list ${i.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `,
  g0 = (a) => {
    const i = a.destination;
    if (i) return xg(a.source, i);
    const r = a.combine;
    return r
      ? Cg(a.draggableId, a.source, r)
      : "You are over an area that cannot be dropped on";
  },
  qm = (a) => `
  The item has returned to its starting position
  of ${Vi(a.index)}
`,
  h0 = (a) => {
    if (a.reason === "CANCEL")
      return `
      Movement cancelled.
      ${qm(a.source)}
    `;
    const i = a.destination,
      r = a.combine;
    return i
      ? `
      You have dropped the item.
      ${xg(a.source, i)}
    `
      : r
        ? `
      You have dropped the item.
      ${Cg(a.draggableId, a.source, r)}
    `
        : `
    The item has been dropped while not over a drop area.
    ${qm(a.source)}
  `;
  },
  Gi = {
    dragHandleUsageInstructions: p0,
    onDragStart: m0,
    onDragUpdate: g0,
    onDragEnd: h0,
  };
function y0(a, i) {
  return !!(a === i || (Number.isNaN(a) && Number.isNaN(i)));
}
function Rg(a, i) {
  if (a.length !== i.length) return !1;
  for (let r = 0; r < a.length; r++) if (!y0(a[r], i[r])) return !1;
  return !0;
}
function vt(a, i) {
  const r = X.useState(() => ({ inputs: i, result: a() }))[0],
    o = X.useRef(!0),
    s = X.useRef(r),
    p =
      o.current || !!(i && s.current.inputs && Rg(i, s.current.inputs))
        ? s.current
        : { inputs: i, result: a() };
  return (
    X.useEffect(() => {
      ((o.current = !1), (s.current = p));
    }, [p]),
    p.result
  );
}
function P(a, i) {
  return vt(() => a, i);
}
const kt = { x: 0, y: 0 },
  ie = (a, i) => ({ x: a.x + i.x, y: a.y + i.y }),
  Ne = (a, i) => ({ x: a.x - i.x, y: a.y - i.y }),
  Kn = (a, i) => a.x === i.x && a.y === i.y,
  aa = (a) => ({ x: a.x !== 0 ? -a.x : 0, y: a.y !== 0 ? -a.y : 0 }),
  hl = (a, i, r = 0) => (a === "x" ? { x: i, y: r } : { x: r, y: i }),
  ru = (a, i) => Math.sqrt((i.x - a.x) ** 2 + (i.y - a.y) ** 2),
  Ym = (a, i) => Math.min(...i.map((r) => ru(a, r))),
  Ng = (a) => (i) => ({ x: a(i.x), y: a(i.y) });
var v0 = (a, i) => {
  const r = Je({
    top: Math.max(i.top, a.top),
    right: Math.min(i.right, a.right),
    bottom: Math.min(i.bottom, a.bottom),
    left: Math.max(i.left, a.left),
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const mu = (a, i) => ({
    top: a.top + i.y,
    left: a.left + i.x,
    bottom: a.bottom + i.y,
    right: a.right + i.x,
  }),
  jm = (a) => [
    { x: a.left, y: a.top },
    { x: a.right, y: a.top },
    { x: a.left, y: a.bottom },
    { x: a.right, y: a.bottom },
  ],
  b0 = { top: 0, right: 0, bottom: 0, left: 0 },
  S0 = (a, i) => (i ? mu(a, i.scroll.diff.displacement) : a),
  E0 = (a, i, r) =>
    r && r.increasedBy
      ? { ...a, [i.end]: a[i.end] + r.increasedBy[i.line] }
      : a,
  D0 = (a, i) => (i && i.shouldClipSubject ? v0(i.pageMarginBox, a) : Je(a));
var ea = ({ page: a, withPlaceholder: i, axis: r, frame: o }) => {
    const s = S0(a.marginBox, o),
      f = E0(s, r, i),
      p = D0(f, o);
    return { page: a, withPlaceholder: i, active: p };
  },
  Fo = (a, i) => {
    a.frame || w();
    const r = a.frame,
      o = Ne(i, r.scroll.initial),
      s = aa(o),
      f = {
        ...r,
        scroll: {
          initial: r.scroll.initial,
          current: i,
          diff: { value: o, displacement: s },
          max: r.scroll.max,
        },
      },
      p = ea({
        page: a.subject.page,
        withPlaceholder: a.subject.withPlaceholder,
        axis: a.axis,
        frame: f,
      });
    return { ...a, frame: f, subject: p };
  };
function $t(a, i = Rg) {
  let r = null;
  function o(...s) {
    if (r && r.lastThis === this && i(s, r.lastArgs)) return r.lastResult;
    const f = a.apply(this, s);
    return ((r = { lastResult: f, lastArgs: s, lastThis: this }), f);
  }
  return (
    (o.clear = function () {
      r = null;
    }),
    o
  );
}
const Mg = $t((a) => a.reduce((i, r) => ((i[r.descriptor.id] = r), i), {})),
  _g = $t((a) => a.reduce((i, r) => ((i[r.descriptor.id] = r), i), {})),
  Ki = $t((a) => Object.values(a)),
  A0 = $t((a) => Object.values(a));
var ua = $t((a, i) =>
  A0(i)
    .filter((o) => a === o.descriptor.droppableId)
    .sort((o, s) => o.descriptor.index - s.descriptor.index),
);
function $o(a) {
  return a.at && a.at.type === "REORDER" ? a.at.destination : null;
}
function Ji(a) {
  return a.at && a.at.type === "COMBINE" ? a.at.combine : null;
}
var Wi = $t((a, i) => i.filter((r) => r.descriptor.id !== a.descriptor.id)),
  T0 = ({
    isMovingForward: a,
    draggable: i,
    destination: r,
    insideDestination: o,
    previousImpact: s,
  }) => {
    if (!r.isCombineEnabled || !$o(s)) return null;
    function p(A) {
      const _ = {
        type: "COMBINE",
        combine: { draggableId: A, droppableId: r.descriptor.id },
      };
      return { ...s, at: _ };
    }
    const y = s.displaced.all,
      g = y.length ? y[0] : null;
    if (a) return g ? p(g) : null;
    const m = Wi(i, o);
    if (!g) {
      if (!m.length) return null;
      const A = m[m.length - 1];
      return p(A.descriptor.id);
    }
    const S = m.findIndex((A) => A.descriptor.id === g);
    S === -1 && w();
    const v = S - 1;
    if (v < 0) return null;
    const b = m[v];
    return p(b.descriptor.id);
  },
  ia = (a, i) => a.descriptor.droppableId === i.descriptor.id;
const zg = { point: kt, value: 0 },
  ou = { invisible: {}, visible: {}, all: [] },
  O0 = { displaced: ou, displacedBy: zg, at: null };
var Qe = (a, i) => (r) => a <= r && r <= i,
  Bg = (a) => {
    const i = Qe(a.top, a.bottom),
      r = Qe(a.left, a.right);
    return (o) => {
      if (i(o.top) && i(o.bottom) && r(o.left) && r(o.right)) return !0;
      const f = i(o.top) || i(o.bottom),
        p = r(o.left) || r(o.right);
      if (f && p) return !0;
      const g = o.top < a.top && o.bottom > a.bottom,
        m = o.left < a.left && o.right > a.right;
      return g && m ? !0 : (g && p) || (m && f);
    };
  },
  x0 = (a) => {
    const i = Qe(a.top, a.bottom),
      r = Qe(a.left, a.right);
    return (o) => i(o.top) && i(o.bottom) && r(o.left) && r(o.right);
  };
const ko = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width",
  },
  Ug = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height",
  };
var C0 = (a) => (i) => {
  const r = Qe(i.top, i.bottom),
    o = Qe(i.left, i.right);
  return (s) => (a === ko ? r(s.top) && r(s.bottom) : o(s.left) && o(s.right));
};
const R0 = (a, i) => {
    const r = i.frame ? i.frame.scroll.diff.displacement : kt;
    return mu(a, r);
  },
  N0 = (a, i, r) => (i.subject.active ? r(i.subject.active)(a) : !1),
  M0 = (a, i, r) => r(i)(a),
  Po = ({
    target: a,
    destination: i,
    viewport: r,
    withDroppableDisplacement: o,
    isVisibleThroughFrameFn: s,
  }) => {
    const f = o ? R0(a, i) : a;
    return N0(f, i, s) && M0(f, r, s);
  },
  _0 = (a) => Po({ ...a, isVisibleThroughFrameFn: Bg }),
  Hg = (a) => Po({ ...a, isVisibleThroughFrameFn: x0 }),
  z0 = (a) => Po({ ...a, isVisibleThroughFrameFn: C0(a.destination.axis) }),
  B0 = (a, i, r) => {
    if (typeof r == "boolean") return r;
    if (!i) return !0;
    const { invisible: o, visible: s } = i;
    if (o[a]) return !1;
    const f = s[a];
    return f ? f.shouldAnimate : !0;
  };
function U0(a, i) {
  const r = a.page.marginBox,
    o = { top: i.point.y, right: 0, bottom: 0, left: i.point.x };
  return Je(Jo(r, o));
}
function su({
  afterDragging: a,
  destination: i,
  displacedBy: r,
  viewport: o,
  forceShouldAnimate: s,
  last: f,
}) {
  return a.reduce(
    function (y, g) {
      const m = U0(g, r),
        S = g.descriptor.id;
      if (
        (y.all.push(S),
        !_0({
          target: m,
          destination: i,
          viewport: o,
          withDroppableDisplacement: !0,
        }))
      )
        return ((y.invisible[g.descriptor.id] = !0), y);
      const b = B0(S, f, s),
        A = { draggableId: S, shouldAnimate: b };
      return ((y.visible[S] = A), y);
    },
    { all: [], visible: {}, invisible: {} },
  );
}
function H0(a, i) {
  if (!a.length) return 0;
  const r = a[a.length - 1].descriptor.index;
  return i.inHomeList ? r : r + 1;
}
function Vm({
  insideDestination: a,
  inHomeList: i,
  displacedBy: r,
  destination: o,
}) {
  const s = H0(a, { inHomeList: i });
  return {
    displaced: ou,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: { droppableId: o.descriptor.id, index: s },
    },
  };
}
function Xi({
  draggable: a,
  insideDestination: i,
  destination: r,
  viewport: o,
  displacedBy: s,
  last: f,
  index: p,
  forceShouldAnimate: y,
}) {
  const g = ia(a, r);
  if (p == null)
    return Vm({
      insideDestination: i,
      inHomeList: g,
      displacedBy: s,
      destination: r,
    });
  const m = i.find((_) => _.descriptor.index === p);
  if (!m)
    return Vm({
      insideDestination: i,
      inHomeList: g,
      displacedBy: s,
      destination: r,
    });
  const S = Wi(a, i),
    v = i.indexOf(m),
    b = S.slice(v);
  return {
    displaced: su({
      afterDragging: b,
      destination: r,
      displacedBy: s,
      last: f,
      viewport: o.frame,
      forceShouldAnimate: y,
    }),
    displacedBy: s,
    at: {
      type: "REORDER",
      destination: { droppableId: r.descriptor.id, index: p },
    },
  };
}
function Jn(a, i) {
  return !!i.effected[a];
}
var G0 = ({
    isMovingForward: a,
    destination: i,
    draggables: r,
    combine: o,
    afterCritical: s,
  }) => {
    if (!i.isCombineEnabled) return null;
    const f = o.draggableId,
      y = r[f].descriptor.index;
    return Jn(f, s) ? (a ? y : y - 1) : a ? y + 1 : y;
  },
  L0 = ({
    isMovingForward: a,
    isInHomeList: i,
    insideDestination: r,
    location: o,
  }) => {
    if (!r.length) return null;
    const s = o.index,
      f = a ? s + 1 : s - 1,
      p = r[0].descriptor.index,
      y = r[r.length - 1].descriptor.index,
      g = i ? y : y + 1;
    return f < p || f > g ? null : f;
  },
  w0 = ({
    isMovingForward: a,
    isInHomeList: i,
    draggable: r,
    draggables: o,
    destination: s,
    insideDestination: f,
    previousImpact: p,
    viewport: y,
    afterCritical: g,
  }) => {
    const m = p.at;
    if ((m || w(), m.type === "REORDER")) {
      const v = L0({
        isMovingForward: a,
        isInHomeList: i,
        location: m.destination,
        insideDestination: f,
      });
      return v == null
        ? null
        : Xi({
            draggable: r,
            insideDestination: f,
            destination: s,
            viewport: y,
            last: p.displaced,
            displacedBy: p.displacedBy,
            index: v,
          });
    }
    const S = G0({
      isMovingForward: a,
      destination: s,
      displaced: p.displaced,
      draggables: o,
      combine: m.combine,
      afterCritical: g,
    });
    return S == null
      ? null
      : Xi({
          draggable: r,
          insideDestination: f,
          destination: s,
          viewport: y,
          last: p.displaced,
          displacedBy: p.displacedBy,
          index: S,
        });
  },
  q0 = ({ displaced: a, afterCritical: i, combineWith: r, displacedBy: o }) => {
    const s = !!(a.visible[r] || a.invisible[r]);
    return Jn(r, i) ? (s ? kt : aa(o.point)) : s ? o.point : kt;
  },
  Y0 = ({ afterCritical: a, impact: i, draggables: r }) => {
    const o = Ji(i);
    o || w();
    const s = o.draggableId,
      f = r[s].page.borderBox.center,
      p = q0({
        displaced: i.displaced,
        afterCritical: a,
        combineWith: s,
        displacedBy: i.displacedBy,
      });
    return ie(f, p);
  };
const Gg = (a, i) => i.margin[a.start] + i.borderBox[a.size] / 2,
  j0 = (a, i) => i.margin[a.end] + i.borderBox[a.size] / 2,
  ts = (a, i, r) =>
    i[a.crossAxisStart] +
    r.margin[a.crossAxisStart] +
    r.borderBox[a.crossAxisSize] / 2,
  Xm = ({ axis: a, moveRelativeTo: i, isMoving: r }) =>
    hl(a.line, i.marginBox[a.end] + Gg(a, r), ts(a, i.marginBox, r)),
  Qm = ({ axis: a, moveRelativeTo: i, isMoving: r }) =>
    hl(a.line, i.marginBox[a.start] - j0(a, r), ts(a, i.marginBox, r)),
  V0 = ({ axis: a, moveInto: i, isMoving: r }) =>
    hl(a.line, i.contentBox[a.start] + Gg(a, r), ts(a, i.contentBox, r));
var X0 = ({
    impact: a,
    draggable: i,
    draggables: r,
    droppable: o,
    afterCritical: s,
  }) => {
    const f = ua(o.descriptor.id, r),
      p = i.page,
      y = o.axis;
    if (!f.length) return V0({ axis: y, moveInto: o.page, isMoving: p });
    const { displaced: g, displacedBy: m } = a,
      S = g.all[0];
    if (S) {
      const b = r[S];
      if (Jn(S, s)) return Qm({ axis: y, moveRelativeTo: b.page, isMoving: p });
      const A = wi(b.page, m.point);
      return Qm({ axis: y, moveRelativeTo: A, isMoving: p });
    }
    const v = f[f.length - 1];
    if (v.descriptor.id === i.descriptor.id) return p.borderBox.center;
    if (Jn(v.descriptor.id, s)) {
      const b = wi(v.page, aa(s.displacedBy.point));
      return Xm({ axis: y, moveRelativeTo: b, isMoving: p });
    }
    return Xm({ axis: y, moveRelativeTo: v.page, isMoving: p });
  },
  qo = (a, i) => {
    const r = a.frame;
    return r ? ie(i, r.scroll.diff.displacement) : i;
  };
const Q0 = ({
  impact: a,
  draggable: i,
  droppable: r,
  draggables: o,
  afterCritical: s,
}) => {
  const f = i.page.borderBox.center,
    p = a.at;
  return !r || !p
    ? f
    : p.type === "REORDER"
      ? X0({
          impact: a,
          draggable: i,
          draggables: o,
          droppable: r,
          afterCritical: s,
        })
      : Y0({ impact: a, draggables: o, afterCritical: s });
};
var Fi = (a) => {
    const i = Q0(a),
      r = a.droppable;
    return r ? qo(r, i) : i;
  },
  Lg = (a, i) => {
    const r = Ne(i, a.scroll.initial),
      o = aa(r);
    return {
      frame: Je({
        top: i.y,
        bottom: i.y + a.frame.height,
        left: i.x,
        right: i.x + a.frame.width,
      }),
      scroll: {
        initial: a.scroll.initial,
        max: a.scroll.max,
        current: i,
        diff: { value: r, displacement: o },
      },
    };
  };
function Zm(a, i) {
  return a.map((r) => i[r]);
}
function Z0(a, i) {
  for (let r = 0; r < i.length; r++) {
    const o = i[r].visible[a];
    if (o) return o;
  }
  return null;
}
var I0 = ({
    impact: a,
    viewport: i,
    destination: r,
    draggables: o,
    maxScrollChange: s,
  }) => {
    const f = Lg(i, ie(i.scroll.current, s)),
      p = r.frame ? Fo(r, ie(r.frame.scroll.current, s)) : r,
      y = a.displaced,
      g = su({
        afterDragging: Zm(y.all, o),
        destination: r,
        displacedBy: a.displacedBy,
        viewport: f.frame,
        last: y,
        forceShouldAnimate: !1,
      }),
      m = su({
        afterDragging: Zm(y.all, o),
        destination: p,
        displacedBy: a.displacedBy,
        viewport: i.frame,
        last: y,
        forceShouldAnimate: !1,
      }),
      S = {},
      v = {},
      b = [y, g, m];
    return (
      y.all.forEach((_) => {
        const H = Z0(_, b);
        if (H) {
          v[_] = H;
          return;
        }
        S[_] = !0;
      }),
      { ...a, displaced: { all: y.all, invisible: S, visible: v } }
    );
  },
  K0 = (a, i) => ie(a.scroll.diff.displacement, i),
  es = ({ pageBorderBoxCenter: a, draggable: i, viewport: r }) => {
    const o = K0(r, a),
      s = Ne(o, i.page.borderBox.center);
    return ie(i.client.borderBox.center, s);
  },
  wg = ({
    draggable: a,
    destination: i,
    newPageBorderBoxCenter: r,
    viewport: o,
    withDroppableDisplacement: s,
    onlyOnMainAxis: f = !1,
  }) => {
    const p = Ne(r, a.page.borderBox.center),
      g = {
        target: mu(a.page.borderBox, p),
        destination: i,
        withDroppableDisplacement: s,
        viewport: o,
      };
    return f ? z0(g) : Hg(g);
  },
  J0 = ({
    isMovingForward: a,
    draggable: i,
    destination: r,
    draggables: o,
    previousImpact: s,
    viewport: f,
    previousPageBorderBoxCenter: p,
    previousClientSelection: y,
    afterCritical: g,
  }) => {
    if (!r.isEnabled) return null;
    const m = ua(r.descriptor.id, o),
      S = ia(i, r),
      v =
        T0({
          isMovingForward: a,
          draggable: i,
          destination: r,
          insideDestination: m,
          previousImpact: s,
        }) ||
        w0({
          isMovingForward: a,
          isInHomeList: S,
          draggable: i,
          draggables: o,
          destination: r,
          insideDestination: m,
          previousImpact: s,
          viewport: f,
          afterCritical: g,
        });
    if (!v) return null;
    const b = Fi({
      impact: v,
      draggable: i,
      droppable: r,
      draggables: o,
      afterCritical: g,
    });
    if (
      wg({
        draggable: i,
        destination: r,
        newPageBorderBoxCenter: b,
        viewport: f.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: es({
          pageBorderBoxCenter: b,
          draggable: i,
          viewport: f,
        }),
        impact: v,
        scrollJumpRequest: null,
      };
    const _ = Ne(b, p),
      H = I0({
        impact: v,
        viewport: f,
        destination: r,
        draggables: o,
        maxScrollChange: _,
      });
    return { clientSelection: y, impact: H, scrollJumpRequest: _ };
  };
const se = (a) => {
  const i = a.subject.active;
  return (i || w(), i);
};
var W0 = ({
  isMovingForward: a,
  pageBorderBoxCenter: i,
  source: r,
  droppables: o,
  viewport: s,
}) => {
  const f = r.subject.active;
  if (!f) return null;
  const p = r.axis,
    y = Qe(f[p.start], f[p.end]),
    g = Ki(o)
      .filter((S) => S !== r)
      .filter((S) => S.isEnabled)
      .filter((S) => !!S.subject.active)
      .filter((S) => Bg(s.frame)(se(S)))
      .filter((S) => {
        const v = se(S);
        return a
          ? f[p.crossAxisEnd] < v[p.crossAxisEnd]
          : v[p.crossAxisStart] < f[p.crossAxisStart];
      })
      .filter((S) => {
        const v = se(S),
          b = Qe(v[p.start], v[p.end]);
        return y(v[p.start]) || y(v[p.end]) || b(f[p.start]) || b(f[p.end]);
      })
      .sort((S, v) => {
        const b = se(S)[p.crossAxisStart],
          A = se(v)[p.crossAxisStart];
        return a ? b - A : A - b;
      })
      .filter(
        (S, v, b) => se(S)[p.crossAxisStart] === se(b[0])[p.crossAxisStart],
      );
  if (!g.length) return null;
  if (g.length === 1) return g[0];
  const m = g.filter((S) => Qe(se(S)[p.start], se(S)[p.end])(i[p.line]));
  return m.length === 1
    ? m[0]
    : m.length > 1
      ? m.sort((S, v) => se(S)[p.start] - se(v)[p.start])[0]
      : g.sort((S, v) => {
          const b = Ym(i, jm(se(S))),
            A = Ym(i, jm(se(v)));
          return b !== A ? b - A : se(S)[p.start] - se(v)[p.start];
        })[0];
};
const Im = (a, i) => {
    const r = a.page.borderBox.center;
    return Jn(a.descriptor.id, i) ? Ne(r, i.displacedBy.point) : r;
  },
  F0 = (a, i) => {
    const r = a.page.borderBox;
    return Jn(a.descriptor.id, i) ? mu(r, aa(i.displacedBy.point)) : r;
  };
var $0 = ({
    pageBorderBoxCenter: a,
    viewport: i,
    destination: r,
    insideDestination: o,
    afterCritical: s,
  }) =>
    o
      .filter((p) =>
        Hg({
          target: F0(p, s),
          destination: r,
          viewport: i.frame,
          withDroppableDisplacement: !0,
        }),
      )
      .sort((p, y) => {
        const g = ru(a, qo(r, Im(p, s))),
          m = ru(a, qo(r, Im(y, s)));
        return g < m ? -1 : m < g ? 1 : p.descriptor.index - y.descriptor.index;
      })[0] || null,
  gu = $t(function (i, r) {
    const o = r[i.line];
    return { value: o, point: hl(i.line, o) };
  });
const k0 = (a, i, r) => {
    const o = a.axis;
    if (a.descriptor.mode === "virtual") return hl(o.line, i[o.line]);
    const s = a.subject.page.contentBox[o.size],
      g =
        ua(a.descriptor.id, r).reduce(
          (m, S) => m + S.client.marginBox[o.size],
          0,
        ) +
        i[o.line] -
        s;
    return g <= 0 ? null : hl(o.line, g);
  },
  qg = (a, i) => ({ ...a, scroll: { ...a.scroll, max: i } }),
  Yg = (a, i, r) => {
    const o = a.frame;
    (ia(i, a) && w(), a.subject.withPlaceholder && w());
    const s = gu(a.axis, i.displaceBy).point,
      f = k0(a, s, r),
      p = {
        placeholderSize: s,
        increasedBy: f,
        oldFrameMaxScroll: a.frame ? a.frame.scroll.max : null,
      };
    if (!o) {
      const S = ea({
        page: a.subject.page,
        withPlaceholder: p,
        axis: a.axis,
        frame: a.frame,
      });
      return { ...a, subject: S };
    }
    const y = f ? ie(o.scroll.max, f) : o.scroll.max,
      g = qg(o, y),
      m = ea({
        page: a.subject.page,
        withPlaceholder: p,
        axis: a.axis,
        frame: g,
      });
    return { ...a, subject: m, frame: g };
  },
  P0 = (a) => {
    const i = a.subject.withPlaceholder;
    i || w();
    const r = a.frame;
    if (!r) {
      const p = ea({
        page: a.subject.page,
        axis: a.axis,
        frame: null,
        withPlaceholder: null,
      });
      return { ...a, subject: p };
    }
    const o = i.oldFrameMaxScroll;
    o || w();
    const s = qg(r, o),
      f = ea({
        page: a.subject.page,
        axis: a.axis,
        frame: s,
        withPlaceholder: null,
      });
    return { ...a, subject: f, frame: s };
  };
var tS = ({
    previousPageBorderBoxCenter: a,
    moveRelativeTo: i,
    insideDestination: r,
    draggable: o,
    draggables: s,
    destination: f,
    viewport: p,
    afterCritical: y,
  }) => {
    if (!i) {
      if (r.length) return null;
      const v = {
          displaced: ou,
          displacedBy: zg,
          at: {
            type: "REORDER",
            destination: { droppableId: f.descriptor.id, index: 0 },
          },
        },
        b = Fi({
          impact: v,
          draggable: o,
          droppable: f,
          draggables: s,
          afterCritical: y,
        }),
        A = ia(o, f) ? f : Yg(f, o, s);
      return wg({
        draggable: o,
        destination: A,
        newPageBorderBoxCenter: b,
        viewport: p.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? v
        : null;
    }
    const g = a[f.axis.line] <= i.page.borderBox.center[f.axis.line],
      m = (() => {
        const v = i.descriptor.index;
        return i.descriptor.id === o.descriptor.id || g ? v : v + 1;
      })(),
      S = gu(f.axis, o.displaceBy);
    return Xi({
      draggable: o,
      insideDestination: r,
      destination: f,
      viewport: p,
      displacedBy: S,
      last: ou,
      index: m,
    });
  },
  eS = ({
    isMovingForward: a,
    previousPageBorderBoxCenter: i,
    draggable: r,
    isOver: o,
    draggables: s,
    droppables: f,
    viewport: p,
    afterCritical: y,
  }) => {
    const g = W0({
      isMovingForward: a,
      pageBorderBoxCenter: i,
      source: o,
      droppables: f,
      viewport: p,
    });
    if (!g) return null;
    const m = ua(g.descriptor.id, s),
      S = $0({
        pageBorderBoxCenter: i,
        viewport: p,
        destination: g,
        insideDestination: m,
        afterCritical: y,
      }),
      v = tS({
        previousPageBorderBoxCenter: i,
        destination: g,
        draggable: r,
        draggables: s,
        moveRelativeTo: S,
        insideDestination: m,
        viewport: p,
        afterCritical: y,
      });
    if (!v) return null;
    const b = Fi({
      impact: v,
      draggable: r,
      droppable: g,
      draggables: s,
      afterCritical: y,
    });
    return {
      clientSelection: es({
        pageBorderBoxCenter: b,
        draggable: r,
        viewport: p,
      }),
      impact: v,
      scrollJumpRequest: null,
    };
  },
  Me = (a) => {
    const i = a.at;
    return i
      ? i.type === "REORDER"
        ? i.destination.droppableId
        : i.combine.droppableId
      : null;
  };
const nS = (a, i) => {
  const r = Me(a);
  return r ? i[r] : null;
};
var lS = ({ state: a, type: i }) => {
  const r = nS(a.impact, a.dimensions.droppables),
    o = !!r,
    s = a.dimensions.droppables[a.critical.droppable.id],
    f = r || s,
    p = f.axis.direction,
    y =
      (p === "vertical" && (i === "MOVE_UP" || i === "MOVE_DOWN")) ||
      (p === "horizontal" && (i === "MOVE_LEFT" || i === "MOVE_RIGHT"));
  if (y && !o) return null;
  const g = i === "MOVE_DOWN" || i === "MOVE_RIGHT",
    m = a.dimensions.draggables[a.critical.draggable.id],
    S = a.current.page.borderBoxCenter,
    { draggables: v, droppables: b } = a.dimensions;
  return y
    ? J0({
        isMovingForward: g,
        previousPageBorderBoxCenter: S,
        draggable: m,
        destination: f,
        draggables: v,
        viewport: a.viewport,
        previousClientSelection: a.current.client.selection,
        previousImpact: a.impact,
        afterCritical: a.afterCritical,
      })
    : eS({
        isMovingForward: g,
        previousPageBorderBoxCenter: S,
        draggable: m,
        isOver: f,
        draggables: v,
        droppables: b,
        viewport: a.viewport,
        afterCritical: a.afterCritical,
      });
};
function gl(a) {
  return a.phase === "DRAGGING" || a.phase === "COLLECTING";
}
function jg(a) {
  const i = Qe(a.top, a.bottom),
    r = Qe(a.left, a.right);
  return function (s) {
    return i(s.y) && r(s.x);
  };
}
function aS(a, i) {
  return (
    a.left < i.right && a.right > i.left && a.top < i.bottom && a.bottom > i.top
  );
}
function uS({ pageBorderBox: a, draggable: i, candidates: r }) {
  const o = i.page.borderBox.center,
    s = r
      .map((f) => {
        const p = f.axis,
          y = hl(
            f.axis.line,
            a.center[p.line],
            f.page.borderBox.center[p.crossAxisLine],
          );
        return { id: f.descriptor.id, distance: ru(o, y) };
      })
      .sort((f, p) => p.distance - f.distance);
  return s[0] ? s[0].id : null;
}
function iS({ pageBorderBox: a, draggable: i, droppables: r }) {
  const o = Ki(r).filter((s) => {
    if (!s.isEnabled) return !1;
    const f = s.subject.active;
    if (!f || !aS(a, f)) return !1;
    if (jg(f)(a.center)) return !0;
    const p = s.axis,
      y = f.center[p.crossAxisLine],
      g = a[p.crossAxisStart],
      m = a[p.crossAxisEnd],
      S = Qe(f[p.crossAxisStart], f[p.crossAxisEnd]),
      v = S(g),
      b = S(m);
    return !v && !b ? !0 : v ? g < y : m > y;
  });
  return o.length
    ? o.length === 1
      ? o[0].descriptor.id
      : uS({ pageBorderBox: a, draggable: i, candidates: o })
    : null;
}
const Vg = (a, i) => Je(mu(a, i));
var cS = (a, i) => {
  const r = a.frame;
  return r ? Vg(i, r.scroll.diff.value) : i;
};
function Xg({ displaced: a, id: i }) {
  return !!(a.visible[i] || a.invisible[i]);
}
function rS({ draggable: a, closest: i, inHomeList: r }) {
  return i
    ? r && i.descriptor.index > a.descriptor.index
      ? i.descriptor.index - 1
      : i.descriptor.index
    : null;
}
var oS = ({
  pageBorderBoxWithDroppableScroll: a,
  draggable: i,
  destination: r,
  insideDestination: o,
  last: s,
  viewport: f,
  afterCritical: p,
}) => {
  const y = r.axis,
    g = gu(r.axis, i.displaceBy),
    m = g.value,
    S = a[y.start],
    v = a[y.end],
    A =
      Wi(i, o).find((H) => {
        const B = H.descriptor.id,
          Y = H.page.borderBox.center[y.line],
          V = Jn(B, p),
          I = Xg({ displaced: s, id: B });
        return V ? (I ? v <= Y : S < Y - m) : I ? v <= Y + m : S < Y;
      }) || null,
    _ = rS({ draggable: i, closest: A, inHomeList: ia(i, r) });
  return Xi({
    draggable: i,
    insideDestination: o,
    destination: r,
    viewport: f,
    last: s,
    displacedBy: g,
    index: _,
  });
};
const sS = 4;
var fS = ({
    draggable: a,
    pageBorderBoxWithDroppableScroll: i,
    previousImpact: r,
    destination: o,
    insideDestination: s,
    afterCritical: f,
  }) => {
    if (!o.isCombineEnabled) return null;
    const p = o.axis,
      y = gu(o.axis, a.displaceBy),
      g = y.value,
      m = i[p.start],
      S = i[p.end],
      b = Wi(a, s).find((_) => {
        const H = _.descriptor.id,
          B = _.page.borderBox,
          V = B[p.size] / sS,
          I = Jn(H, f),
          Q = Xg({ displaced: r.displaced, id: H });
        return I
          ? Q
            ? S > B[p.start] + V && S < B[p.end] - V
            : m > B[p.start] - g + V && m < B[p.end] - g - V
          : Q
            ? S > B[p.start] + g + V && S < B[p.end] + g - V
            : m > B[p.start] + V && m < B[p.end] - V;
      });
    return b
      ? {
          displacedBy: y,
          displaced: r.displaced,
          at: {
            type: "COMBINE",
            combine: {
              draggableId: b.descriptor.id,
              droppableId: o.descriptor.id,
            },
          },
        }
      : null;
  },
  Qg = ({
    pageOffset: a,
    draggable: i,
    draggables: r,
    droppables: o,
    previousImpact: s,
    viewport: f,
    afterCritical: p,
  }) => {
    const y = Vg(i.page.borderBox, a),
      g = iS({ pageBorderBox: y, draggable: i, droppables: o });
    if (!g) return O0;
    const m = o[g],
      S = ua(m.descriptor.id, r),
      v = cS(m, y);
    return (
      fS({
        pageBorderBoxWithDroppableScroll: v,
        draggable: i,
        previousImpact: s,
        destination: m,
        insideDestination: S,
        afterCritical: p,
      }) ||
      oS({
        pageBorderBoxWithDroppableScroll: v,
        draggable: i,
        destination: m,
        insideDestination: S,
        last: s.displaced,
        viewport: f,
        afterCritical: p,
      })
    );
  },
  ns = (a, i) => ({ ...a, [i.descriptor.id]: i });
const dS = ({ previousImpact: a, impact: i, droppables: r }) => {
  const o = Me(a),
    s = Me(i);
  if (!o || o === s) return r;
  const f = r[o];
  if (!f.subject.withPlaceholder) return r;
  const p = P0(f);
  return ns(r, p);
};
var pS = ({
    draggable: a,
    draggables: i,
    droppables: r,
    previousImpact: o,
    impact: s,
  }) => {
    const f = dS({ previousImpact: o, impact: s, droppables: r }),
      p = Me(s);
    if (!p) return f;
    const y = r[p];
    if (ia(a, y) || y.subject.withPlaceholder) return f;
    const g = Yg(y, a, i);
    return ns(f, g);
  },
  uu = ({
    state: a,
    clientSelection: i,
    dimensions: r,
    viewport: o,
    impact: s,
    scrollJumpRequest: f,
  }) => {
    const p = o || a.viewport,
      y = r || a.dimensions,
      g = i || a.current.client.selection,
      m = Ne(g, a.initial.client.selection),
      S = {
        offset: m,
        selection: g,
        borderBoxCenter: ie(a.initial.client.borderBoxCenter, m),
      },
      v = {
        selection: ie(S.selection, p.scroll.current),
        borderBoxCenter: ie(S.borderBoxCenter, p.scroll.current),
        offset: ie(S.offset, p.scroll.diff.value),
      },
      b = { client: S, page: v };
    if (a.phase === "COLLECTING")
      return { ...a, dimensions: y, viewport: p, current: b };
    const A = y.draggables[a.critical.draggable.id],
      _ =
        s ||
        Qg({
          pageOffset: v.offset,
          draggable: A,
          draggables: y.draggables,
          droppables: y.droppables,
          previousImpact: a.impact,
          viewport: p,
          afterCritical: a.afterCritical,
        }),
      H = pS({
        draggable: A,
        impact: _,
        previousImpact: a.impact,
        draggables: y.draggables,
        droppables: y.droppables,
      });
    return {
      ...a,
      current: b,
      dimensions: { draggables: y.draggables, droppables: H },
      impact: _,
      viewport: p,
      scrollJumpRequest: f || null,
      forceShouldAnimate: f ? !1 : null,
    };
  };
function mS(a, i) {
  return a.map((r) => i[r]);
}
var Zg = ({
    impact: a,
    viewport: i,
    draggables: r,
    destination: o,
    forceShouldAnimate: s,
  }) => {
    const f = a.displaced,
      p = mS(f.all, r),
      y = su({
        afterDragging: p,
        destination: o,
        displacedBy: a.displacedBy,
        viewport: i.frame,
        forceShouldAnimate: s,
        last: f,
      });
    return { ...a, displaced: y };
  },
  Ig = ({
    impact: a,
    draggable: i,
    droppable: r,
    draggables: o,
    viewport: s,
    afterCritical: f,
  }) => {
    const p = Fi({
      impact: a,
      draggable: i,
      draggables: o,
      droppable: r,
      afterCritical: f,
    });
    return es({ pageBorderBoxCenter: p, draggable: i, viewport: s });
  },
  Kg = ({ state: a, dimensions: i, viewport: r }) => {
    a.movementMode !== "SNAP" && w();
    const o = a.impact,
      s = r || a.viewport,
      f = i || a.dimensions,
      { draggables: p, droppables: y } = f,
      g = p[a.critical.draggable.id],
      m = Me(o);
    m || w();
    const S = y[m],
      v = Zg({ impact: o, viewport: s, destination: S, draggables: p }),
      b = Ig({
        impact: v,
        draggable: g,
        droppable: S,
        draggables: p,
        viewport: s,
        afterCritical: a.afterCritical,
      });
    return uu({
      impact: v,
      clientSelection: b,
      state: a,
      dimensions: f,
      viewport: s,
    });
  },
  gS = (a) => ({ index: a.index, droppableId: a.droppableId }),
  Jg = ({ draggable: a, home: i, draggables: r, viewport: o }) => {
    const s = gu(i.axis, a.displaceBy),
      f = ua(i.descriptor.id, r),
      p = f.indexOf(a);
    p === -1 && w();
    const y = f.slice(p + 1),
      g = y.reduce((b, A) => ((b[A.descriptor.id] = !0), b), {}),
      m = {
        inVirtualList: i.descriptor.mode === "virtual",
        displacedBy: s,
        effected: g,
      };
    return {
      impact: {
        displaced: su({
          afterDragging: y,
          destination: i,
          displacedBy: s,
          last: null,
          viewport: o.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: s,
        at: { type: "REORDER", destination: gS(a.descriptor) },
      },
      afterCritical: m,
    };
  },
  hS = (a, i) => ({
    draggables: a.draggables,
    droppables: ns(a.droppables, i),
  }),
  yS = ({ draggable: a, offset: i, initialWindowScroll: r }) => {
    const o = wi(a.client, i),
      s = qi(o, r);
    return {
      ...a,
      placeholder: { ...a.placeholder, client: o },
      client: o,
      page: s,
    };
  },
  vS = (a) => {
    const i = a.frame;
    return (i || w(), i);
  },
  bS = ({ additions: a, updatedDroppables: i, viewport: r }) => {
    const o = r.scroll.diff.value;
    return a.map((s) => {
      const f = s.descriptor.droppableId,
        p = i[f],
        g = vS(p).scroll.diff.value,
        m = ie(o, g);
      return yS({
        draggable: s,
        offset: m,
        initialWindowScroll: r.scroll.initial,
      });
    });
  },
  SS = ({ state: a, published: i }) => {
    const r = i.modified.map((Y) => {
        const V = a.dimensions.droppables[Y.droppableId];
        return Fo(V, Y.scroll);
      }),
      o = { ...a.dimensions.droppables, ...Mg(r) },
      s = _g(
        bS({
          additions: i.additions,
          updatedDroppables: o,
          viewport: a.viewport,
        }),
      ),
      f = { ...a.dimensions.draggables, ...s };
    i.removals.forEach((Y) => {
      delete f[Y];
    });
    const p = { droppables: o, draggables: f },
      y = Me(a.impact),
      g = y ? p.droppables[y] : null,
      m = p.draggables[a.critical.draggable.id],
      S = p.droppables[a.critical.droppable.id],
      { impact: v, afterCritical: b } = Jg({
        draggable: m,
        home: S,
        draggables: f,
        viewport: a.viewport,
      }),
      A = g && g.isCombineEnabled ? a.impact : v,
      _ = Qg({
        pageOffset: a.current.page.offset,
        draggable: p.draggables[a.critical.draggable.id],
        draggables: p.draggables,
        droppables: p.droppables,
        previousImpact: A,
        viewport: a.viewport,
        afterCritical: b,
      }),
      H = {
        ...a,
        phase: "DRAGGING",
        impact: _,
        onLiftImpact: v,
        dimensions: p,
        afterCritical: b,
        forceShouldAnimate: !1,
      };
    return a.phase === "COLLECTING"
      ? H
      : { ...H, phase: "DROP_PENDING", reason: a.reason, isWaiting: !1 };
  };
const Yo = (a) => a.movementMode === "SNAP",
  Ro = (a, i, r) => {
    const o = hS(a.dimensions, i);
    return !Yo(a) || r
      ? uu({ state: a, dimensions: o })
      : Kg({ state: a, dimensions: o });
  };
function No(a) {
  return a.isDragging && a.movementMode === "SNAP"
    ? { ...a, scrollJumpRequest: null }
    : a;
}
const Km = { phase: "IDLE", completed: null, shouldFlush: !1 };
var ES = (a = Km, i) => {
  if (i.type === "FLUSH") return { ...Km, shouldFlush: !0 };
  if (i.type === "INITIAL_PUBLISH") {
    a.phase !== "IDLE" && w();
    const {
        critical: r,
        clientSelection: o,
        viewport: s,
        dimensions: f,
        movementMode: p,
      } = i.payload,
      y = f.draggables[r.draggable.id],
      g = f.droppables[r.droppable.id],
      m = {
        selection: o,
        borderBoxCenter: y.client.borderBox.center,
        offset: kt,
      },
      S = {
        client: m,
        page: {
          selection: ie(m.selection, s.scroll.initial),
          borderBoxCenter: ie(m.selection, s.scroll.initial),
          offset: ie(m.selection, s.scroll.diff.value),
        },
      },
      v = Ki(f.droppables).every((H) => !H.isFixedOnPage),
      { impact: b, afterCritical: A } = Jg({
        draggable: y,
        home: g,
        draggables: f.draggables,
        viewport: s,
      });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: p,
      dimensions: f,
      initial: S,
      current: S,
      isWindowScrollAllowed: v,
      impact: b,
      afterCritical: A,
      onLiftImpact: b,
      viewport: s,
      scrollJumpRequest: null,
      forceShouldAnimate: null,
    };
  }
  if (i.type === "COLLECTION_STARTING")
    return a.phase === "COLLECTING" || a.phase === "DROP_PENDING"
      ? a
      : (a.phase !== "DRAGGING" && w(), { ...a, phase: "COLLECTING" });
  if (i.type === "PUBLISH_WHILE_DRAGGING")
    return (
      a.phase === "COLLECTING" || a.phase === "DROP_PENDING" || w(),
      SS({ state: a, published: i.payload })
    );
  if (i.type === "MOVE") {
    if (a.phase === "DROP_PENDING") return a;
    gl(a) || w();
    const { client: r } = i.payload;
    return Kn(r, a.current.client.selection)
      ? a
      : uu({ state: a, clientSelection: r, impact: Yo(a) ? a.impact : null });
  }
  if (i.type === "UPDATE_DROPPABLE_SCROLL") {
    if (a.phase === "DROP_PENDING" || a.phase === "COLLECTING") return No(a);
    gl(a) || w();
    const { id: r, newScroll: o } = i.payload,
      s = a.dimensions.droppables[r];
    if (!s) return a;
    const f = Fo(s, o);
    return Ro(a, f, !1);
  }
  if (i.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (a.phase === "DROP_PENDING") return a;
    gl(a) || w();
    const { id: r, isEnabled: o } = i.payload,
      s = a.dimensions.droppables[r];
    (s || w(), s.isEnabled === o && w());
    const f = { ...s, isEnabled: o };
    return Ro(a, f, !0);
  }
  if (i.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (a.phase === "DROP_PENDING") return a;
    gl(a) || w();
    const { id: r, isCombineEnabled: o } = i.payload,
      s = a.dimensions.droppables[r];
    (s || w(), s.isCombineEnabled === o && w());
    const f = { ...s, isCombineEnabled: o };
    return Ro(a, f, !0);
  }
  if (i.type === "MOVE_BY_WINDOW_SCROLL") {
    if (a.phase === "DROP_PENDING" || a.phase === "DROP_ANIMATING") return a;
    (gl(a) || w(), a.isWindowScrollAllowed || w());
    const r = i.payload.newScroll;
    if (Kn(a.viewport.scroll.current, r)) return No(a);
    const o = Lg(a.viewport, r);
    return Yo(a)
      ? Kg({ state: a, viewport: o })
      : uu({ state: a, viewport: o });
  }
  if (i.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!gl(a)) return a;
    const r = i.payload.maxScroll;
    if (Kn(r, a.viewport.scroll.max)) return a;
    const o = { ...a.viewport, scroll: { ...a.viewport.scroll, max: r } };
    return { ...a, viewport: o };
  }
  if (
    i.type === "MOVE_UP" ||
    i.type === "MOVE_DOWN" ||
    i.type === "MOVE_LEFT" ||
    i.type === "MOVE_RIGHT"
  ) {
    if (a.phase === "COLLECTING" || a.phase === "DROP_PENDING") return a;
    a.phase !== "DRAGGING" && w();
    const r = lS({ state: a, type: i.type });
    return r
      ? uu({
          state: a,
          impact: r.impact,
          clientSelection: r.clientSelection,
          scrollJumpRequest: r.scrollJumpRequest,
        })
      : a;
  }
  if (i.type === "DROP_PENDING") {
    const r = i.payload.reason;
    return (
      a.phase !== "COLLECTING" && w(),
      { ...a, phase: "DROP_PENDING", isWaiting: !0, reason: r }
    );
  }
  if (i.type === "DROP_ANIMATE") {
    const { completed: r, dropDuration: o, newHomeClientOffset: s } = i.payload;
    return (
      a.phase === "DRAGGING" || a.phase === "DROP_PENDING" || w(),
      {
        phase: "DROP_ANIMATING",
        completed: r,
        dropDuration: o,
        newHomeClientOffset: s,
        dimensions: a.dimensions,
      }
    );
  }
  if (i.type === "DROP_COMPLETE") {
    const { completed: r } = i.payload;
    return { phase: "IDLE", completed: r, shouldFlush: !1 };
  }
  return a;
};
function Ct(a, i) {
  return a instanceof Object && "type" in a && a.type === i;
}
const DS = (a) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: a }),
  AS = (a) => ({ type: "LIFT", payload: a }),
  TS = (a) => ({ type: "INITIAL_PUBLISH", payload: a }),
  OS = (a) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: a }),
  xS = () => ({ type: "COLLECTION_STARTING", payload: null }),
  CS = (a) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: a }),
  RS = (a) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: a }),
  NS = (a) => ({ type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: a }),
  Wg = (a) => ({ type: "MOVE", payload: a }),
  MS = (a) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: a }),
  _S = (a) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: a }),
  zS = () => ({ type: "MOVE_UP", payload: null }),
  BS = () => ({ type: "MOVE_DOWN", payload: null }),
  US = () => ({ type: "MOVE_RIGHT", payload: null }),
  HS = () => ({ type: "MOVE_LEFT", payload: null }),
  ls = () => ({ type: "FLUSH", payload: null }),
  GS = (a) => ({ type: "DROP_ANIMATE", payload: a }),
  as = (a) => ({ type: "DROP_COMPLETE", payload: a }),
  Fg = (a) => ({ type: "DROP", payload: a }),
  LS = (a) => ({ type: "DROP_PENDING", payload: a }),
  $g = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
var wS =
    (a) =>
    ({ getState: i, dispatch: r }) =>
    (o) =>
    (s) => {
      if (!Ct(s, "LIFT")) {
        o(s);
        return;
      }
      const { id: f, clientSelection: p, movementMode: y } = s.payload,
        g = i();
      (g.phase === "DROP_ANIMATING" && r(as({ completed: g.completed })),
        i().phase !== "IDLE" && w(),
        r(ls()),
        r(DS({ draggableId: f, movementMode: y })));
      const S = {
          draggableId: f,
          scrollOptions: { shouldPublishImmediately: y === "SNAP" },
        },
        { critical: v, dimensions: b, viewport: A } = a.startPublishing(S);
      r(
        TS({
          critical: v,
          dimensions: b,
          clientSelection: p,
          movementMode: y,
          viewport: A,
        }),
      );
    },
  qS = (a) => () => (i) => (r) => {
    (Ct(r, "INITIAL_PUBLISH") && a.dragging(),
      Ct(r, "DROP_ANIMATE") && a.dropping(r.payload.completed.result.reason),
      (Ct(r, "FLUSH") || Ct(r, "DROP_COMPLETE")) && a.resting(),
      i(r));
  };
const us = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)",
  },
  fu = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
  kg = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
  ml = `${kg.outOfTheWay}s ${us.outOfTheWay}`,
  iu = {
    fluid: `opacity ${ml}`,
    snap: `transform ${ml}, opacity ${ml}`,
    drop: (a) => {
      const i = `${a}s ${us.drop}`;
      return `transform ${i}, opacity ${i}`;
    },
    outOfTheWay: `transform ${ml}`,
    placeholder: `height ${ml}, width ${ml}, margin ${ml}`,
  },
  Jm = (a) => (Kn(a, kt) ? void 0 : `translate(${a.x}px, ${a.y}px)`),
  jo = {
    moveTo: Jm,
    drop: (a, i) => {
      const r = Jm(a);
      if (r) return i ? `${r} scale(${fu.scale.drop})` : r;
    },
  },
  { minDropTime: Vo, maxDropTime: Pg } = kg,
  YS = Pg - Vo,
  Wm = 1500,
  jS = 0.6;
var VS = ({ current: a, destination: i, reason: r }) => {
    const o = ru(a, i);
    if (o <= 0) return Vo;
    if (o >= Wm) return Pg;
    const s = o / Wm,
      f = Vo + YS * s,
      p = r === "CANCEL" ? f * jS : f;
    return Number(p.toFixed(2));
  },
  XS = ({
    impact: a,
    draggable: i,
    dimensions: r,
    viewport: o,
    afterCritical: s,
  }) => {
    const { draggables: f, droppables: p } = r,
      y = Me(a),
      g = y ? p[y] : null,
      m = p[i.descriptor.droppableId],
      S = Ig({
        impact: a,
        draggable: i,
        draggables: f,
        afterCritical: s,
        droppable: g || m,
        viewport: o,
      });
    return Ne(S, i.client.borderBox.center);
  },
  QS = ({
    draggables: a,
    reason: i,
    lastImpact: r,
    home: o,
    viewport: s,
    onLiftImpact: f,
  }) =>
    !r.at || i !== "DROP"
      ? {
          impact: Zg({
            draggables: a,
            impact: f,
            destination: o,
            viewport: s,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : r.at.type === "REORDER"
        ? { impact: r, didDropInsideDroppable: !0 }
        : { impact: { ...r, displaced: ou }, didDropInsideDroppable: !0 };
const ZS =
  ({ getState: a, dispatch: i }) =>
  (r) =>
  (o) => {
    if (!Ct(o, "DROP")) {
      r(o);
      return;
    }
    const s = a(),
      f = o.payload.reason;
    if (s.phase === "COLLECTING") {
      i(LS({ reason: f }));
      return;
    }
    if (s.phase === "IDLE") return;
    (s.phase === "DROP_PENDING" && s.isWaiting && w(),
      s.phase === "DRAGGING" || s.phase === "DROP_PENDING" || w());
    const y = s.critical,
      g = s.dimensions,
      m = g.draggables[s.critical.draggable.id],
      { impact: S, didDropInsideDroppable: v } = QS({
        reason: f,
        lastImpact: s.impact,
        afterCritical: s.afterCritical,
        onLiftImpact: s.onLiftImpact,
        home: s.dimensions.droppables[s.critical.droppable.id],
        viewport: s.viewport,
        draggables: s.dimensions.draggables,
      }),
      b = v ? $o(S) : null,
      A = v ? Ji(S) : null,
      _ = { index: y.draggable.index, droppableId: y.droppable.id },
      H = {
        draggableId: m.descriptor.id,
        type: m.descriptor.type,
        source: _,
        reason: f,
        mode: s.movementMode,
        destination: b,
        combine: A,
      },
      B = XS({
        impact: S,
        draggable: m,
        dimensions: g,
        viewport: s.viewport,
        afterCritical: s.afterCritical,
      }),
      Y = {
        critical: s.critical,
        afterCritical: s.afterCritical,
        result: H,
        impact: S,
      };
    if (!(!Kn(s.current.client.offset, B) || !!H.combine)) {
      i(as({ completed: Y }));
      return;
    }
    const I = VS({
      current: s.current.client.offset,
      destination: B,
      reason: f,
    });
    i(GS({ newHomeClientOffset: B, dropDuration: I, completed: Y }));
  };
var th = () => ({ x: window.pageXOffset, y: window.pageYOffset });
function IS(a) {
  return {
    eventName: "scroll",
    options: { passive: !0, capture: !1 },
    fn: (i) => {
      (i.target !== window && i.target !== window.document) || a();
    },
  };
}
function KS({ onWindowScroll: a }) {
  function i() {
    a(th());
  }
  const r = cu(i),
    o = IS(r);
  let s = In;
  function f() {
    return s !== In;
  }
  function p() {
    (f() && w(), (s = Xe(window, [o])));
  }
  function y() {
    (f() || w(), r.cancel(), s(), (s = In));
  }
  return { start: p, stop: y, isActive: f };
}
const JS = (a) =>
    Ct(a, "DROP_COMPLETE") || Ct(a, "DROP_ANIMATE") || Ct(a, "FLUSH"),
  WS = (a) => {
    const i = KS({
      onWindowScroll: (r) => {
        a.dispatch(MS({ newScroll: r }));
      },
    });
    return (r) => (o) => {
      (!i.isActive() && Ct(o, "INITIAL_PUBLISH") && i.start(),
        i.isActive() && JS(o) && i.stop(),
        r(o));
    };
  };
var FS = (a) => {
    let i = !1,
      r = !1;
    const o = setTimeout(() => {
        r = !0;
      }),
      s = (f) => {
        i || r || ((i = !0), a(f), clearTimeout(o));
      };
    return ((s.wasCalled = () => i), s);
  },
  $S = () => {
    const a = [],
      i = (s) => {
        const f = a.findIndex((y) => y.timerId === s);
        f === -1 && w();
        const [p] = a.splice(f, 1);
        p.callback();
      };
    return {
      add: (s) => {
        const f = setTimeout(() => i(f)),
          p = { timerId: f, callback: s };
        a.push(p);
      },
      flush: () => {
        if (!a.length) return;
        const s = [...a];
        ((a.length = 0),
          s.forEach((f) => {
            (clearTimeout(f.timerId), f.callback());
          }));
      },
    };
  };
const kS = (a, i) =>
    a == null && i == null
      ? !0
      : a == null || i == null
        ? !1
        : a.droppableId === i.droppableId && a.index === i.index,
  PS = (a, i) =>
    a == null && i == null
      ? !0
      : a == null || i == null
        ? !1
        : a.draggableId === i.draggableId && a.droppableId === i.droppableId,
  t1 = (a, i) => {
    if (a === i) return !0;
    const r =
        a.draggable.id === i.draggable.id &&
        a.draggable.droppableId === i.draggable.droppableId &&
        a.draggable.type === i.draggable.type &&
        a.draggable.index === i.draggable.index,
      o =
        a.droppable.id === i.droppable.id &&
        a.droppable.type === i.droppable.type;
    return r && o;
  },
  nu = (a, i) => {
    i();
  },
  Bi = (a, i) => ({
    draggableId: a.draggable.id,
    type: a.droppable.type,
    source: { droppableId: a.droppable.id, index: a.draggable.index },
    mode: i,
  });
function Mo(a, i, r, o) {
  if (!a) {
    r(o(i));
    return;
  }
  const s = FS(r);
  (a(i, { announce: s }), s.wasCalled() || r(o(i)));
}
var e1 = (a, i) => {
    const r = $S();
    let o = null;
    const s = (v, b) => {
        (o && w(),
          nu("onBeforeCapture", () => {
            const A = a().onBeforeCapture;
            A && A({ draggableId: v, mode: b });
          }));
      },
      f = (v, b) => {
        (o && w(),
          nu("onBeforeDragStart", () => {
            const A = a().onBeforeDragStart;
            A && A(Bi(v, b));
          }));
      },
      p = (v, b) => {
        o && w();
        const A = Bi(v, b);
        ((o = {
          mode: b,
          lastCritical: v,
          lastLocation: A.source,
          lastCombine: null,
        }),
          r.add(() => {
            nu("onDragStart", () => Mo(a().onDragStart, A, i, Gi.onDragStart));
          }));
      },
      y = (v, b) => {
        const A = $o(b),
          _ = Ji(b);
        o || w();
        const H = !t1(v, o.lastCritical);
        H && (o.lastCritical = v);
        const B = !kS(o.lastLocation, A);
        B && (o.lastLocation = A);
        const Y = !PS(o.lastCombine, _);
        if ((Y && (o.lastCombine = _), !H && !B && !Y)) return;
        const V = { ...Bi(v, o.mode), combine: _, destination: A };
        r.add(() => {
          nu("onDragUpdate", () => Mo(a().onDragUpdate, V, i, Gi.onDragUpdate));
        });
      },
      g = () => {
        (o || w(), r.flush());
      },
      m = (v) => {
        (o || w(),
          (o = null),
          nu("onDragEnd", () => Mo(a().onDragEnd, v, i, Gi.onDragEnd)));
      };
    return {
      beforeCapture: s,
      beforeStart: f,
      start: p,
      update: y,
      flush: g,
      drop: m,
      abort: () => {
        if (!o) return;
        const v = {
          ...Bi(o.lastCritical, o.mode),
          combine: null,
          destination: null,
          reason: "CANCEL",
        };
        m(v);
      },
    };
  },
  n1 = (a, i) => {
    const r = e1(a, i);
    return (o) => (s) => (f) => {
      if (Ct(f, "BEFORE_INITIAL_CAPTURE")) {
        r.beforeCapture(f.payload.draggableId, f.payload.movementMode);
        return;
      }
      if (Ct(f, "INITIAL_PUBLISH")) {
        const y = f.payload.critical;
        (r.beforeStart(y, f.payload.movementMode),
          s(f),
          r.start(y, f.payload.movementMode));
        return;
      }
      if (Ct(f, "DROP_COMPLETE")) {
        const y = f.payload.completed.result;
        (r.flush(), s(f), r.drop(y));
        return;
      }
      if ((s(f), Ct(f, "FLUSH"))) {
        r.abort();
        return;
      }
      const p = o.getState();
      p.phase === "DRAGGING" && r.update(p.critical, p.impact);
    };
  };
const l1 = (a) => (i) => (r) => {
    if (!Ct(r, "DROP_ANIMATION_FINISHED")) {
      i(r);
      return;
    }
    const o = a.getState();
    (o.phase !== "DROP_ANIMATING" && w(),
      a.dispatch(as({ completed: o.completed })));
  },
  a1 = (a) => {
    let i = null,
      r = null;
    function o() {
      (r && (cancelAnimationFrame(r), (r = null)), i && (i(), (i = null)));
    }
    return (s) => (f) => {
      if (
        ((Ct(f, "FLUSH") ||
          Ct(f, "DROP_COMPLETE") ||
          Ct(f, "DROP_ANIMATION_FINISHED")) &&
          o(),
        s(f),
        !Ct(f, "DROP_ANIMATE"))
      )
        return;
      const p = {
        eventName: "scroll",
        options: { capture: !0, passive: !1, once: !0 },
        fn: function () {
          a.getState().phase === "DROP_ANIMATING" && a.dispatch($g());
        },
      };
      r = requestAnimationFrame(() => {
        ((r = null), (i = Xe(window, [p])));
      });
    };
  };
var u1 = (a) => () => (i) => (r) => {
    ((Ct(r, "DROP_COMPLETE") || Ct(r, "FLUSH") || Ct(r, "DROP_ANIMATE")) &&
      a.stopPublishing(),
      i(r));
  },
  i1 = (a) => {
    let i = !1;
    return () => (r) => (o) => {
      if (Ct(o, "INITIAL_PUBLISH")) {
        ((i = !0),
          a.tryRecordFocus(o.payload.critical.draggable.id),
          r(o),
          a.tryRestoreFocusRecorded());
        return;
      }
      if ((r(o), !!i)) {
        if (Ct(o, "FLUSH")) {
          ((i = !1), a.tryRestoreFocusRecorded());
          return;
        }
        if (Ct(o, "DROP_COMPLETE")) {
          i = !1;
          const s = o.payload.completed.result;
          (s.combine && a.tryShiftRecord(s.draggableId, s.combine.draggableId),
            a.tryRestoreFocusRecorded());
        }
      }
    };
  };
const c1 = (a) =>
  Ct(a, "DROP_COMPLETE") || Ct(a, "DROP_ANIMATE") || Ct(a, "FLUSH");
var r1 = (a) => (i) => (r) => (o) => {
  if (c1(o)) {
    (a.stop(), r(o));
    return;
  }
  if (Ct(o, "INITIAL_PUBLISH")) {
    r(o);
    const s = i.getState();
    (s.phase !== "DRAGGING" && w(), a.start(s));
    return;
  }
  (r(o), a.scroll(i.getState()));
};
const o1 = (a) => (i) => (r) => {
    if ((i(r), !Ct(r, "PUBLISH_WHILE_DRAGGING"))) return;
    const o = a.getState();
    o.phase === "DROP_PENDING" &&
      (o.isWaiting || a.dispatch(Fg({ reason: o.reason })));
  },
  s1 = hg;
var f1 = ({
  dimensionMarshal: a,
  focusMarshal: i,
  styleMarshal: r,
  getResponders: o,
  announce: s,
  autoScroller: f,
}) =>
  gg(
    ES,
    s1(rb(qS(r), u1(a), wS(a), ZS, l1, a1, o1, r1(f), WS, i1(i), n1(o, s))),
  );
const _o = () => ({ additions: {}, removals: {}, modified: {} });
function d1({ registry: a, callbacks: i }) {
  let r = _o(),
    o = null;
  const s = () => {
    o ||
      (i.collectionStarting(),
      (o = requestAnimationFrame(() => {
        o = null;
        const { additions: g, removals: m, modified: S } = r,
          v = Object.keys(g)
            .map((_) => a.draggable.getById(_).getDimension(kt))
            .sort((_, H) => _.descriptor.index - H.descriptor.index),
          b = Object.keys(S).map((_) => {
            const B = a.droppable.getById(_).callbacks.getScrollWhileDragging();
            return { droppableId: _, scroll: B };
          }),
          A = { additions: v, removals: Object.keys(m), modified: b };
        ((r = _o()), i.publish(A));
      })));
  };
  return {
    add: (g) => {
      const m = g.descriptor.id;
      ((r.additions[m] = g),
        (r.modified[g.descriptor.droppableId] = !0),
        r.removals[m] && delete r.removals[m],
        s());
    },
    remove: (g) => {
      const m = g.descriptor;
      ((r.removals[m.id] = !0),
        (r.modified[m.droppableId] = !0),
        r.additions[m.id] && delete r.additions[m.id],
        s());
    },
    stop: () => {
      o && (cancelAnimationFrame(o), (o = null), (r = _o()));
    },
  };
}
var eh = ({ scrollHeight: a, scrollWidth: i, height: r, width: o }) => {
    const s = Ne({ x: i, y: a }, { x: o, y: r });
    return { x: Math.max(0, s.x), y: Math.max(0, s.y) };
  },
  nh = () => {
    const a = document.documentElement;
    return (a || w(), a);
  },
  lh = () => {
    const a = nh();
    return eh({
      scrollHeight: a.scrollHeight,
      scrollWidth: a.scrollWidth,
      width: a.clientWidth,
      height: a.clientHeight,
    });
  },
  p1 = () => {
    const a = th(),
      i = lh(),
      r = a.y,
      o = a.x,
      s = nh(),
      f = s.clientWidth,
      p = s.clientHeight,
      y = o + f,
      g = r + p;
    return {
      frame: Je({ top: r, left: o, right: y, bottom: g }),
      scroll: {
        initial: a,
        current: a,
        max: i,
        diff: { value: kt, displacement: kt },
      },
    };
  },
  m1 = ({ critical: a, scrollOptions: i, registry: r }) => {
    const o = p1(),
      s = o.scroll.current,
      f = a.droppable,
      p = r.droppable
        .getAllByType(f.type)
        .map((S) => S.callbacks.getDimensionAndWatchScroll(s, i)),
      y = r.draggable
        .getAllByType(a.draggable.type)
        .map((S) => S.getDimension(s));
    return {
      dimensions: { draggables: _g(y), droppables: Mg(p) },
      critical: a,
      viewport: o,
    };
  };
function Fm(a, i, r) {
  return !(
    r.descriptor.id === i.id ||
    r.descriptor.type !== i.type ||
    a.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual"
  );
}
var g1 = (a, i) => {
    let r = null;
    const o = d1({
        callbacks: {
          publish: i.publishWhileDragging,
          collectionStarting: i.collectionStarting,
        },
        registry: a,
      }),
      s = (b, A) => {
        (a.droppable.exists(b) || w(),
          r && i.updateDroppableIsEnabled({ id: b, isEnabled: A }));
      },
      f = (b, A) => {
        r &&
          (a.droppable.exists(b) || w(),
          i.updateDroppableIsCombineEnabled({ id: b, isCombineEnabled: A }));
      },
      p = (b, A) => {
        r &&
          (a.droppable.exists(b) || w(),
          i.updateDroppableScroll({ id: b, newScroll: A }));
      },
      y = (b, A) => {
        r && a.droppable.getById(b).callbacks.scroll(A);
      },
      g = () => {
        if (!r) return;
        o.stop();
        const b = r.critical.droppable;
        (a.droppable
          .getAllByType(b.type)
          .forEach((A) => A.callbacks.dragStopped()),
          r.unsubscribe(),
          (r = null));
      },
      m = (b) => {
        r || w();
        const A = r.critical.draggable;
        (b.type === "ADDITION" && Fm(a, A, b.value) && o.add(b.value),
          b.type === "REMOVAL" && Fm(a, A, b.value) && o.remove(b.value));
      };
    return {
      updateDroppableIsEnabled: s,
      updateDroppableIsCombineEnabled: f,
      scrollDroppable: y,
      updateDroppableScroll: p,
      startPublishing: (b) => {
        r && w();
        const A = a.draggable.getById(b.draggableId),
          _ = a.droppable.getById(A.descriptor.droppableId),
          H = { draggable: A.descriptor, droppable: _.descriptor },
          B = a.subscribe(m);
        return (
          (r = { critical: H, unsubscribe: B }),
          m1({ critical: H, registry: a, scrollOptions: b.scrollOptions })
        );
      },
      stopPublishing: g,
    };
  },
  ah = (a, i) =>
    a.phase === "IDLE"
      ? !0
      : a.phase !== "DROP_ANIMATING" || a.completed.result.draggableId === i
        ? !1
        : a.completed.result.reason === "DROP",
  h1 = (a) => {
    window.scrollBy(a.x, a.y);
  };
const y1 = $t((a) => Ki(a).filter((i) => !(!i.isEnabled || !i.frame))),
  v1 = (a, i) =>
    y1(i).find((o) => (o.frame || w(), jg(o.frame.pageMarginBox)(a))) || null;
var b1 = ({ center: a, destination: i, droppables: r }) => {
  if (i) {
    const s = r[i];
    return s.frame ? s : null;
  }
  return v1(a, r);
};
const du = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (a) => a ** 2,
  durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
  disabled: !1,
};
var S1 = (a, i, r = () => du) => {
    const o = r(),
      s = a[i.size] * o.startFromPercentage,
      f = a[i.size] * o.maxScrollAtPercentage;
    return { startScrollingFrom: s, maxScrollValueAt: f };
  },
  uh = ({ startOfRange: a, endOfRange: i, current: r }) => {
    const o = i - a;
    return o === 0 ? 0 : (r - a) / o;
  },
  is = 1,
  E1 = (a, i, r = () => du) => {
    const o = r();
    if (a > i.startScrollingFrom) return 0;
    if (a <= i.maxScrollValueAt) return o.maxPixelScroll;
    if (a === i.startScrollingFrom) return is;
    const f =
        1 -
        uh({
          startOfRange: i.maxScrollValueAt,
          endOfRange: i.startScrollingFrom,
          current: a,
        }),
      p = o.maxPixelScroll * o.ease(f);
    return Math.ceil(p);
  },
  D1 = (a, i, r) => {
    const o = r(),
      s = o.durationDampening.accelerateAt,
      f = o.durationDampening.stopDampeningAt,
      p = i,
      y = f,
      m = Date.now() - p;
    if (m >= f) return a;
    if (m < s) return is;
    const S = uh({ startOfRange: s, endOfRange: y, current: m }),
      v = a * o.ease(S);
    return Math.ceil(v);
  },
  $m = ({
    distanceToEdge: a,
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s,
  }) => {
    const f = E1(a, i, s);
    return f === 0 ? 0 : o ? Math.max(D1(f, r, s), is) : f;
  },
  km = ({
    container: a,
    distanceToEdges: i,
    dragStartTime: r,
    axis: o,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: f,
  }) => {
    const p = S1(a, o, f);
    return i[o.end] < i[o.start]
      ? $m({
          distanceToEdge: i[o.end],
          thresholds: p,
          dragStartTime: r,
          shouldUseTimeDampening: s,
          getAutoScrollerOptions: f,
        })
      : -1 *
          $m({
            distanceToEdge: i[o.start],
            thresholds: p,
            dragStartTime: r,
            shouldUseTimeDampening: s,
            getAutoScrollerOptions: f,
          });
  },
  A1 = ({ container: a, subject: i, proposedScroll: r }) => {
    const o = i.height > a.height,
      s = i.width > a.width;
    return !s && !o ? r : s && o ? null : { x: s ? 0 : r.x, y: o ? 0 : r.y };
  };
const T1 = Ng((a) => (a === 0 ? 0 : a));
var ih = ({
  dragStartTime: a,
  container: i,
  subject: r,
  center: o,
  shouldUseTimeDampening: s,
  getAutoScrollerOptions: f,
}) => {
  const p = {
      top: o.y - i.top,
      right: i.right - o.x,
      bottom: i.bottom - o.y,
      left: o.x - i.left,
    },
    y = km({
      container: i,
      distanceToEdges: p,
      dragStartTime: a,
      axis: ko,
      shouldUseTimeDampening: s,
      getAutoScrollerOptions: f,
    }),
    g = km({
      container: i,
      distanceToEdges: p,
      dragStartTime: a,
      axis: Ug,
      shouldUseTimeDampening: s,
      getAutoScrollerOptions: f,
    }),
    m = T1({ x: g, y });
  if (Kn(m, kt)) return null;
  const S = A1({ container: i, subject: r, proposedScroll: m });
  return S ? (Kn(S, kt) ? null : S) : null;
};
const O1 = Ng((a) => (a === 0 ? 0 : a > 0 ? 1 : -1)),
  cs = (() => {
    const a = (i, r) => (i < 0 ? i : i > r ? i - r : 0);
    return ({ current: i, max: r, change: o }) => {
      const s = ie(i, o),
        f = { x: a(s.x, r.x), y: a(s.y, r.y) };
      return Kn(f, kt) ? null : f;
    };
  })(),
  ch = ({ max: a, current: i, change: r }) => {
    const o = { x: Math.max(i.x, a.x), y: Math.max(i.y, a.y) },
      s = O1(r),
      f = cs({ max: o, current: i, change: s });
    return !f || (s.x !== 0 && f.x === 0) || (s.y !== 0 && f.y === 0);
  },
  rs = (a, i) =>
    ch({ current: a.scroll.current, max: a.scroll.max, change: i }),
  x1 = (a, i) => {
    if (!rs(a, i)) return null;
    const r = a.scroll.max,
      o = a.scroll.current;
    return cs({ current: o, max: r, change: i });
  },
  os = (a, i) => {
    const r = a.frame;
    return r
      ? ch({ current: r.scroll.current, max: r.scroll.max, change: i })
      : !1;
  },
  C1 = (a, i) => {
    const r = a.frame;
    return !r || !os(a, i)
      ? null
      : cs({ current: r.scroll.current, max: r.scroll.max, change: i });
  };
var R1 = ({
    viewport: a,
    subject: i,
    center: r,
    dragStartTime: o,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: f,
  }) => {
    const p = ih({
      dragStartTime: o,
      container: a.frame,
      subject: i,
      center: r,
      shouldUseTimeDampening: s,
      getAutoScrollerOptions: f,
    });
    return p && rs(a, p) ? p : null;
  },
  N1 = ({
    droppable: a,
    subject: i,
    center: r,
    dragStartTime: o,
    shouldUseTimeDampening: s,
    getAutoScrollerOptions: f,
  }) => {
    const p = a.frame;
    if (!p) return null;
    const y = ih({
      dragStartTime: o,
      container: p.pageMarginBox,
      subject: i,
      center: r,
      shouldUseTimeDampening: s,
      getAutoScrollerOptions: f,
    });
    return y && os(a, y) ? y : null;
  },
  Pm = ({
    state: a,
    dragStartTime: i,
    shouldUseTimeDampening: r,
    scrollWindow: o,
    scrollDroppable: s,
    getAutoScrollerOptions: f,
  }) => {
    const p = a.current.page.borderBoxCenter,
      g = a.dimensions.draggables[a.critical.draggable.id].page.marginBox;
    if (a.isWindowScrollAllowed) {
      const v = a.viewport,
        b = R1({
          dragStartTime: i,
          viewport: v,
          subject: g,
          center: p,
          shouldUseTimeDampening: r,
          getAutoScrollerOptions: f,
        });
      if (b) {
        o(b);
        return;
      }
    }
    const m = b1({
      center: p,
      destination: Me(a.impact),
      droppables: a.dimensions.droppables,
    });
    if (!m) return;
    const S = N1({
      dragStartTime: i,
      droppable: m,
      subject: g,
      center: p,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: f,
    });
    S && s(m.descriptor.id, S);
  },
  M1 = ({
    scrollWindow: a,
    scrollDroppable: i,
    getAutoScrollerOptions: r = () => du,
  }) => {
    const o = cu(a),
      s = cu(i);
    let f = null;
    const p = (m) => {
      f || w();
      const { shouldUseTimeDampening: S, dragStartTime: v } = f;
      Pm({
        state: m,
        scrollWindow: o,
        scrollDroppable: s,
        dragStartTime: v,
        shouldUseTimeDampening: S,
        getAutoScrollerOptions: r,
      });
    };
    return {
      start: (m) => {
        f && w();
        const S = Date.now();
        let v = !1;
        const b = () => {
          v = !0;
        };
        (Pm({
          state: m,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: b,
          scrollDroppable: b,
          getAutoScrollerOptions: r,
        }),
          (f = { dragStartTime: S, shouldUseTimeDampening: v }),
          v && p(m));
      },
      stop: () => {
        f && (o.cancel(), s.cancel(), (f = null));
      },
      scroll: p,
    };
  },
  _1 = ({ move: a, scrollDroppable: i, scrollWindow: r }) => {
    const o = (y, g) => {
        const m = ie(y.current.client.selection, g);
        a({ client: m });
      },
      s = (y, g) => {
        if (!os(y, g)) return g;
        const m = C1(y, g);
        if (!m) return (i(y.descriptor.id, g), null);
        const S = Ne(g, m);
        return (i(y.descriptor.id, S), Ne(g, S));
      },
      f = (y, g, m) => {
        if (!y || !rs(g, m)) return m;
        const S = x1(g, m);
        if (!S) return (r(m), null);
        const v = Ne(m, S);
        return (r(v), Ne(m, v));
      };
    return (y) => {
      const g = y.scrollJumpRequest;
      if (!g) return;
      const m = Me(y.impact);
      m || w();
      const S = s(y.dimensions.droppables[m], g);
      if (!S) return;
      const v = y.viewport,
        b = f(y.isWindowScrollAllowed, v, S);
      b && o(y, b);
    };
  },
  z1 = ({
    scrollDroppable: a,
    scrollWindow: i,
    move: r,
    getAutoScrollerOptions: o,
  }) => {
    const s = M1({
        scrollWindow: i,
        scrollDroppable: a,
        getAutoScrollerOptions: o,
      }),
      f = _1({ move: r, scrollWindow: i, scrollDroppable: a });
    return {
      scroll: (g) => {
        if (!(o().disabled || g.phase !== "DRAGGING")) {
          if (g.movementMode === "FLUID") {
            s.scroll(g);
            return;
          }
          g.scrollJumpRequest && f(g);
        }
      },
      start: s.start,
      stop: s.stop,
    };
  };
const na = "data-rfd",
  la = (() => {
    const a = `${na}-drag-handle`;
    return {
      base: a,
      draggableId: `${a}-draggable-id`,
      contextId: `${a}-context-id`,
    };
  })(),
  Xo = (() => {
    const a = `${na}-draggable`;
    return { base: a, contextId: `${a}-context-id`, id: `${a}-id` };
  })(),
  B1 = (() => {
    const a = `${na}-droppable`;
    return { base: a, contextId: `${a}-context-id`, id: `${a}-id` };
  })(),
  tg = { contextId: `${na}-scroll-container-context-id` },
  U1 = (a) => (i) => `[${i}="${a}"]`,
  lu = (a, i) =>
    a
      .map((r) => {
        const o = r.styles[i];
        return o ? `${r.selector} { ${o} }` : "";
      })
      .join(" "),
  H1 = "pointer-events: none;";
var G1 = (a) => {
  const i = U1(a),
    r = (() => {
      const y = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
      return {
        selector: i(la.contextId),
        styles: {
          always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
          resting: y,
          dragging: H1,
          dropAnimating: y,
        },
      };
    })(),
    o = (() => {
      const y = `
      transition: ${iu.outOfTheWay};
    `;
      return {
        selector: i(Xo.contextId),
        styles: { dragging: y, dropAnimating: y, userCancel: y },
      };
    })(),
    s = {
      selector: i(B1.contextId),
      styles: { always: "overflow-anchor: none;" },
    },
    p = [
      o,
      r,
      s,
      {
        selector: "body",
        styles: {
          dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
        },
      },
    ];
  return {
    always: lu(p, "always"),
    resting: lu(p, "resting"),
    dragging: lu(p, "dragging"),
    dropAnimating: lu(p, "dropAnimating"),
    userCancel: lu(p, "userCancel"),
  };
};
const _e =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? X.useLayoutEffect
      : X.useEffect,
  zo = () => {
    const a = document.querySelector("head");
    return (a || w(), a);
  },
  eg = (a) => {
    const i = document.createElement("style");
    return (a && i.setAttribute("nonce", a), (i.type = "text/css"), i);
  };
function L1(a, i) {
  const r = vt(() => G1(a), [a]),
    o = X.useRef(null),
    s = X.useRef(null),
    f = P(
      $t((v) => {
        const b = s.current;
        (b || w(), (b.textContent = v));
      }),
      [],
    ),
    p = P((v) => {
      const b = o.current;
      (b || w(), (b.textContent = v));
    }, []);
  _e(() => {
    (!o.current && !s.current) || w();
    const v = eg(i),
      b = eg(i);
    return (
      (o.current = v),
      (s.current = b),
      v.setAttribute(`${na}-always`, a),
      b.setAttribute(`${na}-dynamic`, a),
      zo().appendChild(v),
      zo().appendChild(b),
      p(r.always),
      f(r.resting),
      () => {
        const A = (_) => {
          const H = _.current;
          (H || w(), zo().removeChild(H), (_.current = null));
        };
        (A(o), A(s));
      }
    );
  }, [i, p, f, r.always, r.resting, a]);
  const y = P(() => f(r.dragging), [f, r.dragging]),
    g = P(
      (v) => {
        if (v === "DROP") {
          f(r.dropAnimating);
          return;
        }
        f(r.userCancel);
      },
      [f, r.dropAnimating, r.userCancel],
    ),
    m = P(() => {
      s.current && f(r.resting);
    }, [f, r.resting]);
  return vt(() => ({ dragging: y, dropping: g, resting: m }), [y, g, m]);
}
function rh(a, i) {
  return Array.from(a.querySelectorAll(i));
}
var oh = (a) =>
  a && a.ownerDocument && a.ownerDocument.defaultView
    ? a.ownerDocument.defaultView
    : window;
function $i(a) {
  return a instanceof oh(a).HTMLElement;
}
function w1(a, i) {
  const r = `[${la.contextId}="${a}"]`,
    o = rh(document, r);
  if (!o.length) return null;
  const s = o.find((f) => f.getAttribute(la.draggableId) === i);
  return !s || !$i(s) ? null : s;
}
function q1(a) {
  const i = X.useRef({}),
    r = X.useRef(null),
    o = X.useRef(null),
    s = X.useRef(!1),
    f = P(function (b, A) {
      const _ = { id: b, focus: A };
      return (
        (i.current[b] = _),
        function () {
          const B = i.current;
          B[b] !== _ && delete B[b];
        }
      );
    }, []),
    p = P(
      function (b) {
        const A = w1(a, b);
        A && A !== document.activeElement && A.focus();
      },
      [a],
    ),
    y = P(function (b, A) {
      r.current === b && (r.current = A);
    }, []),
    g = P(
      function () {
        o.current ||
          (s.current &&
            (o.current = requestAnimationFrame(() => {
              o.current = null;
              const b = r.current;
              b && p(b);
            })));
      },
      [p],
    ),
    m = P(function (b) {
      r.current = null;
      const A = document.activeElement;
      A && A.getAttribute(la.draggableId) === b && (r.current = b);
    }, []);
  return (
    _e(
      () => (
        (s.current = !0),
        function () {
          s.current = !1;
          const b = o.current;
          b && cancelAnimationFrame(b);
        }
      ),
      [],
    ),
    vt(
      () => ({
        register: f,
        tryRecordFocus: m,
        tryRestoreFocusRecorded: g,
        tryShiftRecord: y,
      }),
      [f, m, g, y],
    )
  );
}
function Y1() {
  const a = { draggables: {}, droppables: {} },
    i = [];
  function r(v) {
    return (
      i.push(v),
      function () {
        const A = i.indexOf(v);
        A !== -1 && i.splice(A, 1);
      }
    );
  }
  function o(v) {
    i.length && i.forEach((b) => b(v));
  }
  function s(v) {
    return a.draggables[v] || null;
  }
  function f(v) {
    const b = s(v);
    return (b || w(), b);
  }
  const p = {
    register: (v) => {
      ((a.draggables[v.descriptor.id] = v), o({ type: "ADDITION", value: v }));
    },
    update: (v, b) => {
      const A = a.draggables[b.descriptor.id];
      A &&
        A.uniqueId === v.uniqueId &&
        (delete a.draggables[b.descriptor.id],
        (a.draggables[v.descriptor.id] = v));
    },
    unregister: (v) => {
      const b = v.descriptor.id,
        A = s(b);
      A &&
        v.uniqueId === A.uniqueId &&
        (delete a.draggables[b],
        a.droppables[v.descriptor.droppableId] &&
          o({ type: "REMOVAL", value: v }));
    },
    getById: f,
    findById: s,
    exists: (v) => !!s(v),
    getAllByType: (v) =>
      Object.values(a.draggables).filter((b) => b.descriptor.type === v),
  };
  function y(v) {
    return a.droppables[v] || null;
  }
  function g(v) {
    const b = y(v);
    return (b || w(), b);
  }
  const m = {
    register: (v) => {
      a.droppables[v.descriptor.id] = v;
    },
    unregister: (v) => {
      const b = y(v.descriptor.id);
      b && v.uniqueId === b.uniqueId && delete a.droppables[v.descriptor.id];
    },
    getById: g,
    findById: y,
    exists: (v) => !!y(v),
    getAllByType: (v) =>
      Object.values(a.droppables).filter((b) => b.descriptor.type === v),
  };
  function S() {
    ((a.draggables = {}), (a.droppables = {}), (i.length = 0));
  }
  return { draggable: p, droppable: m, subscribe: r, clean: S };
}
function j1() {
  const a = vt(Y1, []);
  return (
    X.useEffect(
      () =>
        function () {
          a.clean();
        },
      [a],
    ),
    a
  );
}
var ss = Xt.createContext(null),
  Qi = () => {
    const a = document.body;
    return (a || w(), a);
  };
const V1 = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)",
  },
  X1 = (a) => `rfd-announcement-${a}`;
function Q1(a) {
  const i = vt(() => X1(a), [a]),
    r = X.useRef(null);
  return (
    X.useEffect(
      function () {
        const f = document.createElement("div");
        return (
          (r.current = f),
          (f.id = i),
          f.setAttribute("aria-live", "assertive"),
          f.setAttribute("aria-atomic", "true"),
          Yi(f.style, V1),
          Qi().appendChild(f),
          function () {
            setTimeout(function () {
              const g = Qi();
              (g.contains(f) && g.removeChild(f),
                f === r.current && (r.current = null));
            });
          }
        );
      },
      [i],
    ),
    P((s) => {
      const f = r.current;
      if (f) {
        f.textContent = s;
        return;
      }
    }, [])
  );
}
const Z1 = { separator: "::" };
function fs(a, i = Z1) {
  const r = Xt.useId();
  return vt(() => `${a}${i.separator}${r}`, [i.separator, a, r]);
}
function I1({ contextId: a, uniqueId: i }) {
  return `rfd-hidden-text-${a}-${i}`;
}
function K1({ contextId: a, text: i }) {
  const r = fs("hidden-text", { separator: "-" }),
    o = vt(() => I1({ contextId: a, uniqueId: r }), [r, a]);
  return (
    X.useEffect(
      function () {
        const f = document.createElement("div");
        return (
          (f.id = o),
          (f.textContent = i),
          (f.style.display = "none"),
          Qi().appendChild(f),
          function () {
            const y = Qi();
            y.contains(f) && y.removeChild(f);
          }
        );
      },
      [o, i],
    ),
    o
  );
}
var ki = Xt.createContext(null);
function sh(a) {
  const i = X.useRef(a);
  return (
    X.useEffect(() => {
      i.current = a;
    }),
    i
  );
}
function J1() {
  let a = null;
  function i() {
    return !!a;
  }
  function r(p) {
    return p === a;
  }
  function o(p) {
    a && w();
    const y = { abandon: p };
    return ((a = y), y);
  }
  function s() {
    (a || w(), (a = null));
  }
  function f() {
    a && (a.abandon(), s());
  }
  return { isClaimed: i, isActive: r, claim: o, release: s, tryAbandon: f };
}
function pu(a) {
  return a.phase === "IDLE" || a.phase === "DROP_ANIMATING" ? !1 : a.isDragging;
}
const W1 = 9,
  F1 = 13,
  ds = 27,
  fh = 32,
  $1 = 33,
  k1 = 34,
  P1 = 35,
  tE = 36,
  eE = 37,
  nE = 38,
  lE = 39,
  aE = 40,
  uE = { [F1]: !0, [W1]: !0 };
var dh = (a) => {
  uE[a.keyCode] && a.preventDefault();
};
const Pi = (() => {
    const a = "visibilitychange";
    return typeof document > "u"
      ? a
      : [a, `ms${a}`, `webkit${a}`, `moz${a}`, `o${a}`].find(
          (o) => `on${o}` in document,
        ) || a;
  })(),
  ph = 0,
  ng = 5;
function iE(a, i) {
  return Math.abs(i.x - a.x) >= ng || Math.abs(i.y - a.y) >= ng;
}
const lg = { type: "IDLE" };
function cE({ cancel: a, completed: i, getPhase: r, setPhase: o }) {
  return [
    {
      eventName: "mousemove",
      fn: (s) => {
        const { button: f, clientX: p, clientY: y } = s;
        if (f !== ph) return;
        const g = { x: p, y },
          m = r();
        if (m.type === "DRAGGING") {
          (s.preventDefault(), m.actions.move(g));
          return;
        }
        m.type !== "PENDING" && w();
        const S = m.point;
        if (!iE(S, g)) return;
        s.preventDefault();
        const v = m.actions.fluidLift(g);
        o({ type: "DRAGGING", actions: v });
      },
    },
    {
      eventName: "mouseup",
      fn: (s) => {
        const f = r();
        if (f.type !== "DRAGGING") {
          a();
          return;
        }
        (s.preventDefault(), f.actions.drop({ shouldBlockNextClick: !0 }), i());
      },
    },
    {
      eventName: "mousedown",
      fn: (s) => {
        (r().type === "DRAGGING" && s.preventDefault(), a());
      },
    },
    {
      eventName: "keydown",
      fn: (s) => {
        if (r().type === "PENDING") {
          a();
          return;
        }
        if (s.keyCode === ds) {
          (s.preventDefault(), a());
          return;
        }
        dh(s);
      },
    },
    { eventName: "resize", fn: a },
    {
      eventName: "scroll",
      options: { passive: !0, capture: !1 },
      fn: () => {
        r().type === "PENDING" && a();
      },
    },
    {
      eventName: "webkitmouseforcedown",
      fn: (s) => {
        const f = r();
        if ((f.type === "IDLE" && w(), f.actions.shouldRespectForcePress())) {
          a();
          return;
        }
        s.preventDefault();
      },
    },
    { eventName: Pi, fn: a },
  ];
}
function rE(a) {
  const i = X.useRef(lg),
    r = X.useRef(In),
    o = vt(
      () => ({
        eventName: "mousedown",
        fn: function (v) {
          if (
            v.defaultPrevented ||
            v.button !== ph ||
            v.ctrlKey ||
            v.metaKey ||
            v.shiftKey ||
            v.altKey
          )
            return;
          const b = a.findClosestDraggableId(v);
          if (!b) return;
          const A = a.tryGetLock(b, p, { sourceEvent: v });
          if (!A) return;
          v.preventDefault();
          const _ = { x: v.clientX, y: v.clientY };
          (r.current(), m(A, _));
        },
      }),
      [a],
    ),
    s = vt(
      () => ({
        eventName: "webkitmouseforcewillbegin",
        fn: (S) => {
          if (S.defaultPrevented) return;
          const v = a.findClosestDraggableId(S);
          if (!v) return;
          const b = a.findOptionsForDraggable(v);
          b &&
            (b.shouldRespectForcePress ||
              (a.canGetLock(v) && S.preventDefault()));
        },
      }),
      [a],
    ),
    f = P(
      function () {
        const v = { passive: !1, capture: !0 };
        r.current = Xe(window, [s, o], v);
      },
      [s, o],
    ),
    p = P(() => {
      i.current.type !== "IDLE" && ((i.current = lg), r.current(), f());
    }, [f]),
    y = P(() => {
      const S = i.current;
      (p(),
        S.type === "DRAGGING" && S.actions.cancel({ shouldBlockNextClick: !0 }),
        S.type === "PENDING" && S.actions.abort());
    }, [p]),
    g = P(
      function () {
        const v = { capture: !0, passive: !1 },
          b = cE({
            cancel: y,
            completed: p,
            getPhase: () => i.current,
            setPhase: (A) => {
              i.current = A;
            },
          });
        r.current = Xe(window, b, v);
      },
      [y, p],
    ),
    m = P(
      function (v, b) {
        (i.current.type !== "IDLE" && w(),
          (i.current = { type: "PENDING", point: b, actions: v }),
          g());
      },
      [g],
    );
  _e(
    function () {
      return (
        f(),
        function () {
          r.current();
        }
      );
    },
    [f],
  );
}
function oE() {}
const sE = { [k1]: !0, [$1]: !0, [tE]: !0, [P1]: !0 };
function fE(a, i) {
  function r() {
    (i(), a.cancel());
  }
  function o() {
    (i(), a.drop());
  }
  return [
    {
      eventName: "keydown",
      fn: (s) => {
        if (s.keyCode === ds) {
          (s.preventDefault(), r());
          return;
        }
        if (s.keyCode === fh) {
          (s.preventDefault(), o());
          return;
        }
        if (s.keyCode === aE) {
          (s.preventDefault(), a.moveDown());
          return;
        }
        if (s.keyCode === nE) {
          (s.preventDefault(), a.moveUp());
          return;
        }
        if (s.keyCode === lE) {
          (s.preventDefault(), a.moveRight());
          return;
        }
        if (s.keyCode === eE) {
          (s.preventDefault(), a.moveLeft());
          return;
        }
        if (sE[s.keyCode]) {
          s.preventDefault();
          return;
        }
        dh(s);
      },
    },
    { eventName: "mousedown", fn: r },
    { eventName: "mouseup", fn: r },
    { eventName: "click", fn: r },
    { eventName: "touchstart", fn: r },
    { eventName: "resize", fn: r },
    { eventName: "wheel", fn: r, options: { passive: !0 } },
    { eventName: Pi, fn: r },
  ];
}
function dE(a) {
  const i = X.useRef(oE),
    r = vt(
      () => ({
        eventName: "keydown",
        fn: function (f) {
          if (f.defaultPrevented || f.keyCode !== fh) return;
          const p = a.findClosestDraggableId(f);
          if (!p) return;
          const y = a.tryGetLock(p, S, { sourceEvent: f });
          if (!y) return;
          f.preventDefault();
          let g = !0;
          const m = y.snapLift();
          i.current();
          function S() {
            (g || w(), (g = !1), i.current(), o());
          }
          i.current = Xe(window, fE(m, S), { capture: !0, passive: !1 });
        },
      }),
      [a],
    ),
    o = P(
      function () {
        const f = { passive: !1, capture: !0 };
        i.current = Xe(window, [r], f);
      },
      [r],
    );
  _e(
    function () {
      return (
        o(),
        function () {
          i.current();
        }
      );
    },
    [o],
  );
}
const Bo = { type: "IDLE" },
  pE = 120,
  mE = 0.15;
function gE({ cancel: a, getPhase: i }) {
  return [
    { eventName: "orientationchange", fn: a },
    { eventName: "resize", fn: a },
    {
      eventName: "contextmenu",
      fn: (r) => {
        r.preventDefault();
      },
    },
    {
      eventName: "keydown",
      fn: (r) => {
        if (i().type !== "DRAGGING") {
          a();
          return;
        }
        (r.keyCode === ds && r.preventDefault(), a());
      },
    },
    { eventName: Pi, fn: a },
  ];
}
function hE({ cancel: a, completed: i, getPhase: r }) {
  return [
    {
      eventName: "touchmove",
      options: { capture: !1 },
      fn: (o) => {
        const s = r();
        if (s.type !== "DRAGGING") {
          a();
          return;
        }
        s.hasMoved = !0;
        const { clientX: f, clientY: p } = o.touches[0],
          y = { x: f, y: p };
        (o.preventDefault(), s.actions.move(y));
      },
    },
    {
      eventName: "touchend",
      fn: (o) => {
        const s = r();
        if (s.type !== "DRAGGING") {
          a();
          return;
        }
        (o.preventDefault(), s.actions.drop({ shouldBlockNextClick: !0 }), i());
      },
    },
    {
      eventName: "touchcancel",
      fn: (o) => {
        if (r().type !== "DRAGGING") {
          a();
          return;
        }
        (o.preventDefault(), a());
      },
    },
    {
      eventName: "touchforcechange",
      fn: (o) => {
        const s = r();
        s.type === "IDLE" && w();
        const f = o.touches[0];
        if (!f || !(f.force >= mE)) return;
        const y = s.actions.shouldRespectForcePress();
        if (s.type === "PENDING") {
          y && a();
          return;
        }
        if (y) {
          if (s.hasMoved) {
            o.preventDefault();
            return;
          }
          a();
          return;
        }
        o.preventDefault();
      },
    },
    { eventName: Pi, fn: a },
  ];
}
function yE(a) {
  const i = X.useRef(Bo),
    r = X.useRef(In),
    o = P(function () {
      return i.current;
    }, []),
    s = P(function (A) {
      i.current = A;
    }, []),
    f = vt(
      () => ({
        eventName: "touchstart",
        fn: function (A) {
          if (A.defaultPrevented) return;
          const _ = a.findClosestDraggableId(A);
          if (!_) return;
          const H = a.tryGetLock(_, y, { sourceEvent: A });
          if (!H) return;
          const B = A.touches[0],
            { clientX: Y, clientY: V } = B,
            I = { x: Y, y: V };
          (r.current(), v(H, I));
        },
      }),
      [a],
    ),
    p = P(
      function () {
        const A = { capture: !0, passive: !1 };
        r.current = Xe(window, [f], A);
      },
      [f],
    ),
    y = P(() => {
      const b = i.current;
      b.type !== "IDLE" &&
        (b.type === "PENDING" && clearTimeout(b.longPressTimerId),
        s(Bo),
        r.current(),
        p());
    }, [p, s]),
    g = P(() => {
      const b = i.current;
      (y(),
        b.type === "DRAGGING" && b.actions.cancel({ shouldBlockNextClick: !0 }),
        b.type === "PENDING" && b.actions.abort());
    }, [y]),
    m = P(
      function () {
        const A = { capture: !0, passive: !1 },
          _ = { cancel: g, completed: y, getPhase: o },
          H = Xe(window, hE(_), A),
          B = Xe(window, gE(_), A);
        r.current = function () {
          (H(), B());
        };
      },
      [g, o, y],
    ),
    S = P(
      function () {
        const A = o();
        A.type !== "PENDING" && w();
        const _ = A.actions.fluidLift(A.point);
        s({ type: "DRAGGING", actions: _, hasMoved: !1 });
      },
      [o, s],
    ),
    v = P(
      function (A, _) {
        o().type !== "IDLE" && w();
        const H = setTimeout(S, pE);
        (s({ type: "PENDING", point: _, actions: A, longPressTimerId: H }),
          m());
      },
      [m, o, s, S],
    );
  (_e(
    function () {
      return (
        p(),
        function () {
          r.current();
          const _ = o();
          _.type === "PENDING" && (clearTimeout(_.longPressTimerId), s(Bo));
        }
      );
    },
    [o, p, s],
  ),
    _e(function () {
      return Xe(window, [
        {
          eventName: "touchmove",
          fn: () => {},
          options: { capture: !1, passive: !1 },
        },
      ]);
    }, []));
}
const vE = [
  "input",
  "button",
  "textarea",
  "select",
  "option",
  "optgroup",
  "video",
  "audio",
];
function mh(a, i) {
  if (i == null) return !1;
  if (vE.includes(i.tagName.toLowerCase())) return !0;
  const o = i.getAttribute("contenteditable");
  return o === "true" || o === "" ? !0 : i === a ? !1 : mh(a, i.parentElement);
}
function bE(a, i) {
  const r = i.target;
  return $i(r) ? mh(a, r) : !1;
}
var SE = (a) => Je(a.getBoundingClientRect()).center;
function EE(a) {
  return a instanceof oh(a).Element;
}
const DE = (() => {
  const a = "matches";
  return typeof document > "u"
    ? a
    : [a, "msMatchesSelector", "webkitMatchesSelector"].find(
        (o) => o in Element.prototype,
      ) || a;
})();
function gh(a, i) {
  return a == null ? null : a[DE](i) ? a : gh(a.parentElement, i);
}
function AE(a, i) {
  return a.closest ? a.closest(i) : gh(a, i);
}
function TE(a) {
  return `[${la.contextId}="${a}"]`;
}
function OE(a, i) {
  const r = i.target;
  if (!EE(r)) return null;
  const o = TE(a),
    s = AE(r, o);
  return !s || !$i(s) ? null : s;
}
function xE(a, i) {
  const r = OE(a, i);
  return r ? r.getAttribute(la.draggableId) : null;
}
function CE(a, i) {
  const r = `[${Xo.contextId}="${a}"]`,
    s = rh(document, r).find((f) => f.getAttribute(Xo.id) === i);
  return !s || !$i(s) ? null : s;
}
function RE(a) {
  a.preventDefault();
}
function Ui({ expected: a, phase: i, isLockActive: r, shouldWarn: o }) {
  return !(!r() || a !== i);
}
function hh({ lockAPI: a, store: i, registry: r, draggableId: o }) {
  if (a.isClaimed()) return !1;
  const s = r.draggable.findById(o);
  return !(!s || !s.options.isEnabled || !ah(i.getState(), o));
}
function NE({
  lockAPI: a,
  contextId: i,
  store: r,
  registry: o,
  draggableId: s,
  forceSensorStop: f,
  sourceEvent: p,
}) {
  if (!hh({ lockAPI: a, store: r, registry: o, draggableId: s })) return null;
  const g = o.draggable.getById(s),
    m = CE(i, g.descriptor.id);
  if (!m || (p && !g.options.canDragInteractiveElements && bE(m, p)))
    return null;
  const S = a.claim(f || In);
  let v = "PRE_DRAG";
  function b() {
    return g.options.shouldRespectForcePress;
  }
  function A() {
    return a.isActive(S);
  }
  function _(W, F) {
    Ui({ expected: W, phase: v, isLockActive: A, shouldWarn: !0 }) &&
      r.dispatch(F());
  }
  const H = _.bind(null, "DRAGGING");
  function B(W) {
    function F() {
      (a.release(), (v = "COMPLETED"));
    }
    (v !== "PRE_DRAG" && (F(), w()),
      r.dispatch(AS(W.liftActionArgs)),
      (v = "DRAGGING"));
    function Z(it, Ht = { shouldBlockNextClick: !1 }) {
      if ((W.cleanup(), Ht.shouldBlockNextClick)) {
        const yt = Xe(window, [
          {
            eventName: "click",
            fn: RE,
            options: { once: !0, passive: !1, capture: !0 },
          },
        ]);
        setTimeout(yt);
      }
      (F(), r.dispatch(Fg({ reason: it })));
    }
    return {
      isActive: () =>
        Ui({ expected: "DRAGGING", phase: v, isLockActive: A, shouldWarn: !1 }),
      shouldRespectForcePress: b,
      drop: (it) => Z("DROP", it),
      cancel: (it) => Z("CANCEL", it),
      ...W.actions,
    };
  }
  function Y(W) {
    const F = cu((it) => {
      H(() => Wg({ client: it }));
    });
    return {
      ...B({
        liftActionArgs: { id: s, clientSelection: W, movementMode: "FLUID" },
        cleanup: () => F.cancel(),
        actions: { move: F },
      }),
      move: F,
    };
  }
  function V() {
    const W = {
      moveUp: () => H(zS),
      moveRight: () => H(US),
      moveDown: () => H(BS),
      moveLeft: () => H(HS),
    };
    return B({
      liftActionArgs: { id: s, clientSelection: SE(m), movementMode: "SNAP" },
      cleanup: In,
      actions: W,
    });
  }
  function I() {
    Ui({ expected: "PRE_DRAG", phase: v, isLockActive: A, shouldWarn: !0 }) &&
      a.release();
  }
  return {
    isActive: () =>
      Ui({ expected: "PRE_DRAG", phase: v, isLockActive: A, shouldWarn: !1 }),
    shouldRespectForcePress: b,
    fluidLift: Y,
    snapLift: V,
    abort: I,
  };
}
const ME = [rE, dE, yE];
function _E({
  contextId: a,
  store: i,
  registry: r,
  customSensors: o,
  enableDefaultSensors: s,
}) {
  const f = [...(s ? ME : []), ...(o || [])],
    p = X.useState(() => J1())[0],
    y = P(
      function (B, Y) {
        pu(B) && !pu(Y) && p.tryAbandon();
      },
      [p],
    );
  (_e(
    function () {
      let B = i.getState();
      return i.subscribe(() => {
        const V = i.getState();
        (y(B, V), (B = V));
      });
    },
    [p, i, y],
  ),
    _e(() => p.tryAbandon, [p.tryAbandon]));
  const g = P(
      (H) => hh({ lockAPI: p, registry: r, store: i, draggableId: H }),
      [p, r, i],
    ),
    m = P(
      (H, B, Y) =>
        NE({
          lockAPI: p,
          registry: r,
          contextId: a,
          store: i,
          draggableId: H,
          forceSensorStop: B || null,
          sourceEvent: Y && Y.sourceEvent ? Y.sourceEvent : null,
        }),
      [a, p, r, i],
    ),
    S = P((H) => xE(a, H), [a]),
    v = P(
      (H) => {
        const B = r.draggable.findById(H);
        return B ? B.options : null;
      },
      [r.draggable],
    ),
    b = P(
      function () {
        p.isClaimed() &&
          (p.tryAbandon(), i.getState().phase !== "IDLE" && i.dispatch(ls()));
      },
      [p, i],
    ),
    A = P(() => p.isClaimed(), [p]),
    _ = vt(
      () => ({
        canGetLock: g,
        tryGetLock: m,
        findClosestDraggableId: S,
        findOptionsForDraggable: v,
        tryReleaseLock: b,
        isLockClaimed: A,
      }),
      [g, m, S, v, b, A],
    );
  for (let H = 0; H < f.length; H++) f[H](_);
}
const zE = (a) => ({
    onBeforeCapture: (i) => {
      const r = () => {
        a.onBeforeCapture && a.onBeforeCapture(i);
      };
      Zo.flushSync(r);
    },
    onBeforeDragStart: a.onBeforeDragStart,
    onDragStart: a.onDragStart,
    onDragEnd: a.onDragEnd,
    onDragUpdate: a.onDragUpdate,
  }),
  BE = (a) => ({
    ...du,
    ...a.autoScrollerOptions,
    durationDampening: { ...du.durationDampening, ...a.autoScrollerOptions },
  });
function au(a) {
  return (a.current || w(), a.current);
}
function UE(a) {
  const {
      contextId: i,
      setCallbacks: r,
      sensors: o,
      nonce: s,
      dragHandleUsageInstructions: f,
    } = a,
    p = X.useRef(null),
    y = sh(a),
    g = P(() => zE(y.current), [y]),
    m = P(() => BE(y.current), [y]),
    S = Q1(i),
    v = K1({ contextId: i, text: f }),
    b = L1(i, s),
    A = P((yt) => {
      au(p).dispatch(yt);
    }, []),
    _ = vt(
      () =>
        Nm(
          {
            publishWhileDragging: OS,
            updateDroppableScroll: CS,
            updateDroppableIsEnabled: RS,
            updateDroppableIsCombineEnabled: NS,
            collectionStarting: xS,
          },
          A,
        ),
      [A],
    ),
    H = j1(),
    B = vt(() => g1(H, _), [H, _]),
    Y = vt(
      () =>
        z1({
          scrollWindow: h1,
          scrollDroppable: B.scrollDroppable,
          getAutoScrollerOptions: m,
          ...Nm({ move: Wg }, A),
        }),
      [B.scrollDroppable, A, m],
    ),
    V = q1(i),
    I = vt(
      () =>
        f1({
          announce: S,
          autoScroller: Y,
          dimensionMarshal: B,
          focusMarshal: V,
          getResponders: g,
          styleMarshal: b,
        }),
      [S, Y, B, V, g, b],
    );
  p.current = I;
  const Q = P(() => {
      const yt = au(p);
      yt.getState().phase !== "IDLE" && yt.dispatch(ls());
    }, []),
    W = P(() => {
      const yt = au(p).getState();
      return yt.phase === "DROP_ANIMATING"
        ? !0
        : yt.phase === "IDLE"
          ? !1
          : yt.isDragging;
    }, []),
    F = vt(() => ({ isDragging: W, tryAbort: Q }), [W, Q]);
  r(F);
  const Z = P((yt) => ah(au(p).getState(), yt), []),
    it = P(() => gl(au(p).getState()), []),
    Ht = vt(
      () => ({
        marshal: B,
        focus: V,
        contextId: i,
        canLift: Z,
        isMovementAllowed: it,
        dragHandleUsageInstructionsId: v,
        registry: H,
      }),
      [i, B, v, V, Z, it, H],
    );
  return (
    _E({
      contextId: i,
      store: I,
      registry: H,
      customSensors: o || null,
      enableDefaultSensors: a.enableDefaultSensors !== !1,
    }),
    X.useEffect(() => Q, [Q]),
    Xt.createElement(
      ki.Provider,
      { value: Ht },
      Xt.createElement(u0, { context: ss, store: I }, a.children),
    )
  );
}
function HE() {
  return Xt.useId();
}
function GE(a) {
  const i = HE(),
    r = a.dragHandleUsageInstructions || Gi.dragHandleUsageInstructions;
  return Xt.createElement(d0, null, (o) =>
    Xt.createElement(
      UE,
      {
        nonce: a.nonce,
        contextId: i,
        setCallbacks: o,
        dragHandleUsageInstructions: r,
        enableDefaultSensors: a.enableDefaultSensors,
        sensors: a.sensors,
        onBeforeCapture: a.onBeforeCapture,
        onBeforeDragStart: a.onBeforeDragStart,
        onDragStart: a.onDragStart,
        onDragUpdate: a.onDragUpdate,
        onDragEnd: a.onDragEnd,
        autoScrollerOptions: a.autoScrollerOptions,
      },
      a.children,
    ),
  );
}
const ag = { dragging: 5e3, dropAnimating: 4500 },
  LE = (a, i) => (i ? iu.drop(i.duration) : a ? iu.snap : iu.fluid),
  wE = (a, i) => {
    if (a) return i ? fu.opacity.drop : fu.opacity.combining;
  },
  qE = (a) =>
    a.forceShouldAnimate != null ? a.forceShouldAnimate : a.mode === "SNAP";
function YE(a) {
  const r = a.dimension.client,
    { offset: o, combineWith: s, dropping: f } = a,
    p = !!s,
    y = qE(a),
    g = !!f,
    m = g ? jo.drop(o, p) : jo.moveTo(o);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: LE(y, f),
    transform: m,
    opacity: wE(p, g),
    zIndex: g ? ag.dropAnimating : ag.dragging,
    pointerEvents: "none",
  };
}
function jE(a) {
  return {
    transform: jo.moveTo(a.offset),
    transition: a.shouldAnimateDisplacement ? void 0 : "none",
  };
}
function VE(a) {
  return a.type === "DRAGGING" ? YE(a) : jE(a);
}
function XE(a, i, r = kt) {
  const o = window.getComputedStyle(i),
    s = i.getBoundingClientRect(),
    f = Ag(s, o),
    p = qi(f, r),
    y = { client: f, tagName: i.tagName.toLowerCase(), display: o.display },
    g = { x: f.marginBox.width, y: f.marginBox.height };
  return { descriptor: a, placeholder: y, displaceBy: g, client: f, page: p };
}
function QE(a) {
  const i = fs("draggable"),
    {
      descriptor: r,
      registry: o,
      getDraggableRef: s,
      canDragInteractiveElements: f,
      shouldRespectForcePress: p,
      isEnabled: y,
    } = a,
    g = vt(
      () => ({
        canDragInteractiveElements: f,
        shouldRespectForcePress: p,
        isEnabled: y,
      }),
      [f, y, p],
    ),
    m = P(
      (A) => {
        const _ = s();
        return (_ || w(), XE(r, _, A));
      },
      [r, s],
    ),
    S = vt(
      () => ({ uniqueId: i, descriptor: r, options: g, getDimension: m }),
      [r, m, g, i],
    ),
    v = X.useRef(S),
    b = X.useRef(!0);
  (_e(
    () => (
      o.draggable.register(v.current),
      () => o.draggable.unregister(v.current)
    ),
    [o.draggable],
  ),
    _e(() => {
      if (b.current) {
        b.current = !1;
        return;
      }
      const A = v.current;
      ((v.current = S), o.draggable.update(S, A));
    }, [S, o.draggable]));
}
var ps = Xt.createContext(null);
function Zi(a) {
  const i = X.useContext(a);
  return (i || w(), i);
}
function ZE(a) {
  a.preventDefault();
}
const IE = (a) => {
  const i = X.useRef(null),
    r = P((F = null) => {
      i.current = F;
    }, []),
    o = P(() => i.current, []),
    { contextId: s, dragHandleUsageInstructionsId: f, registry: p } = Zi(ki),
    { type: y, droppableId: g } = Zi(ps),
    m = vt(
      () => ({ id: a.draggableId, index: a.index, type: y, droppableId: g }),
      [a.draggableId, a.index, y, g],
    ),
    {
      children: S,
      draggableId: v,
      isEnabled: b,
      shouldRespectForcePress: A,
      canDragInteractiveElements: _,
      isClone: H,
      mapped: B,
      dropAnimationFinished: Y,
    } = a;
  if (!H) {
    const F = vt(
      () => ({
        descriptor: m,
        registry: p,
        getDraggableRef: o,
        canDragInteractiveElements: _,
        shouldRespectForcePress: A,
        isEnabled: b,
      }),
      [m, p, o, _, A, b],
    );
    QE(F);
  }
  const V = vt(
      () =>
        b
          ? {
              tabIndex: 0,
              role: "button",
              "aria-describedby": f,
              "data-rfd-drag-handle-draggable-id": v,
              "data-rfd-drag-handle-context-id": s,
              draggable: !1,
              onDragStart: ZE,
            }
          : null,
      [s, f, v, b],
    ),
    I = P(
      (F) => {
        B.type === "DRAGGING" &&
          B.dropping &&
          F.propertyName === "transform" &&
          Zo.flushSync(Y);
      },
      [Y, B],
    ),
    Q = vt(() => {
      const F = VE(B),
        Z = B.type === "DRAGGING" && B.dropping ? I : void 0;
      return {
        innerRef: r,
        draggableProps: {
          "data-rfd-draggable-context-id": s,
          "data-rfd-draggable-id": v,
          style: F,
          onTransitionEnd: Z,
        },
        dragHandleProps: V,
      };
    }, [s, V, v, B, I, r]),
    W = vt(
      () => ({
        draggableId: m.id,
        type: m.type,
        source: { index: m.index, droppableId: m.droppableId },
      }),
      [m.droppableId, m.id, m.index, m.type],
    );
  return Xt.createElement(Xt.Fragment, null, S(Q, B.snapshot, W));
};
var yh = (a, i) => a === i,
  vh = (a) => {
    const { combine: i, destination: r } = a;
    return r ? r.droppableId : i ? i.droppableId : null;
  };
const KE = (a) => (a.combine ? a.combine.draggableId : null),
  JE = (a) =>
    a.at && a.at.type === "COMBINE" ? a.at.combine.draggableId : null;
function WE() {
  const a = $t((s, f) => ({ x: s, y: f })),
    i = $t((s, f, p = null, y = null, g = null) => ({
      isDragging: !0,
      isClone: f,
      isDropAnimating: !!g,
      dropAnimation: g,
      mode: s,
      draggingOver: p,
      combineWith: y,
      combineTargetFor: null,
    })),
    r = $t((s, f, p, y, g = null, m = null, S = null) => ({
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver: g,
        combineWith: m,
        mode: f,
        offset: s,
        dimension: p,
        forceShouldAnimate: S,
        snapshot: i(f, y, g, m, null),
      },
    }));
  return (s, f) => {
    if (pu(s)) {
      if (s.critical.draggable.id !== f.draggableId) return null;
      const p = s.current.client.offset,
        y = s.dimensions.draggables[f.draggableId],
        g = Me(s.impact),
        m = JE(s.impact),
        S = s.forceShouldAnimate;
      return r(a(p.x, p.y), s.movementMode, y, f.isClone, g, m, S);
    }
    if (s.phase === "DROP_ANIMATING") {
      const p = s.completed;
      if (p.result.draggableId !== f.draggableId) return null;
      const y = f.isClone,
        g = s.dimensions.draggables[f.draggableId],
        m = p.result,
        S = m.mode,
        v = vh(m),
        b = KE(m),
        _ = {
          duration: s.dropDuration,
          curve: us.drop,
          moveTo: s.newHomeClientOffset,
          opacity: b ? fu.opacity.drop : null,
          scale: b ? fu.scale.drop : null,
        };
      return {
        mapped: {
          type: "DRAGGING",
          offset: s.newHomeClientOffset,
          dimension: g,
          dropping: _,
          draggingOver: v,
          combineWith: b,
          mode: S,
          forceShouldAnimate: null,
          snapshot: i(S, y, v, b, _),
        },
      };
    }
    return null;
  };
}
function bh(a = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: a,
    combineWith: null,
  };
}
const FE = {
  mapped: {
    type: "SECONDARY",
    offset: kt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: bh(null),
  },
};
function $E() {
  const a = $t((p, y) => ({ x: p, y })),
    i = $t(bh),
    r = $t((p, y = null, g) => ({
      mapped: {
        type: "SECONDARY",
        offset: p,
        combineTargetFor: y,
        shouldAnimateDisplacement: g,
        snapshot: i(y),
      },
    })),
    o = (p) => (p ? r(kt, p, !0) : null),
    s = (p, y, g, m) => {
      const S = g.displaced.visible[p],
        v = !!(m.inVirtualList && m.effected[p]),
        b = Ji(g),
        A = b && b.draggableId === p ? y : null;
      if (!S) {
        if (!v) return o(A);
        if (g.displaced.invisible[p]) return null;
        const B = aa(m.displacedBy.point),
          Y = a(B.x, B.y);
        return r(Y, A, !0);
      }
      if (v) return o(A);
      const _ = g.displacedBy.point,
        H = a(_.x, _.y);
      return r(H, A, S.shouldAnimate);
    };
  return (p, y) => {
    if (pu(p))
      return p.critical.draggable.id === y.draggableId
        ? null
        : s(y.draggableId, p.critical.draggable.id, p.impact, p.afterCritical);
    if (p.phase === "DROP_ANIMATING") {
      const g = p.completed;
      return g.result.draggableId === y.draggableId
        ? null
        : s(y.draggableId, g.result.draggableId, g.impact, g.afterCritical);
    }
    return null;
  };
}
const kE = () => {
    const a = WE(),
      i = $E();
    return (o, s) => a(o, s) || i(o, s) || FE;
  },
  PE = { dropAnimationFinished: $g },
  tD = Dg(kE, PE, null, { context: ss, areStatePropsEqual: yh })(IE);
function Sh(a) {
  return Zi(ps).isUsingCloneFor === a.draggableId && !a.isClone
    ? null
    : Xt.createElement(tD, a);
}
function eD(a) {
  const i = typeof a.isDragDisabled == "boolean" ? !a.isDragDisabled : !0,
    r = !!a.disableInteractiveElementBlocking,
    o = !!a.shouldRespectForcePress;
  return Xt.createElement(
    Sh,
    Yi({}, a, {
      isClone: !1,
      isEnabled: i,
      canDragInteractiveElements: r,
      shouldRespectForcePress: o,
    }),
  );
}
const Eh = (a) => (i) => a === i,
  nD = Eh("scroll"),
  lD = Eh("auto"),
  ug = (a, i) => i(a.overflowX) || i(a.overflowY),
  aD = (a) => {
    const i = window.getComputedStyle(a),
      r = { overflowX: i.overflowX, overflowY: i.overflowY };
    return ug(r, nD) || ug(r, lD);
  },
  uD = () => !1,
  Dh = (a) =>
    a == null
      ? null
      : a === document.body
        ? uD()
          ? a
          : null
        : a === document.documentElement
          ? null
          : aD(a)
            ? a
            : Dh(a.parentElement);
var Qo = (a) => ({ x: a.scrollLeft, y: a.scrollTop });
const Ah = (a) =>
  a
    ? window.getComputedStyle(a).position === "fixed"
      ? !0
      : Ah(a.parentElement)
    : !1;
var iD = (a) => {
    const i = Dh(a),
      r = Ah(a);
    return { closestScrollable: i, isFixedOnPage: r };
  },
  cD = ({
    descriptor: a,
    isEnabled: i,
    isCombineEnabled: r,
    isFixedOnPage: o,
    direction: s,
    client: f,
    page: p,
    closest: y,
  }) => {
    const g = (() => {
        if (!y) return null;
        const { scrollSize: b, client: A } = y,
          _ = eh({
            scrollHeight: b.scrollHeight,
            scrollWidth: b.scrollWidth,
            height: A.paddingBox.height,
            width: A.paddingBox.width,
          });
        return {
          pageMarginBox: y.page.marginBox,
          frameClient: A,
          scrollSize: b,
          shouldClipSubject: y.shouldClipSubject,
          scroll: {
            initial: y.scroll,
            current: y.scroll,
            max: _,
            diff: { value: kt, displacement: kt },
          },
        };
      })(),
      m = s === "vertical" ? ko : Ug,
      S = ea({ page: p, withPlaceholder: null, axis: m, frame: g });
    return {
      descriptor: a,
      isCombineEnabled: r,
      isFixedOnPage: o,
      axis: m,
      isEnabled: i,
      client: f,
      page: p,
      frame: g,
      subject: S,
    };
  };
const rD = (a, i) => {
  const r = Tg(a);
  if (!i || a !== i) return r;
  const o = r.paddingBox.top - i.scrollTop,
    s = r.paddingBox.left - i.scrollLeft,
    f = o + i.scrollHeight,
    p = s + i.scrollWidth,
    g = Jo({ top: o, right: p, bottom: f, left: s }, r.border);
  return Wo({
    borderBox: g,
    margin: r.margin,
    border: r.border,
    padding: r.padding,
  });
};
var oD = ({
  ref: a,
  descriptor: i,
  env: r,
  windowScroll: o,
  direction: s,
  isDropDisabled: f,
  isCombineEnabled: p,
  shouldClipSubject: y,
}) => {
  const g = r.closestScrollable,
    m = rD(a, g),
    S = qi(m, o),
    v = (() => {
      if (!g) return null;
      const A = Tg(g),
        _ = { scrollHeight: g.scrollHeight, scrollWidth: g.scrollWidth };
      return {
        client: A,
        page: qi(A, o),
        scroll: Qo(g),
        scrollSize: _,
        shouldClipSubject: y,
      };
    })();
  return cD({
    descriptor: i,
    isEnabled: !f,
    isCombineEnabled: p,
    isFixedOnPage: r.isFixedOnPage,
    direction: s,
    client: m,
    page: S,
    closest: v,
  });
};
const sD = { passive: !1 },
  fD = { passive: !0 };
var ig = (a) => (a.shouldPublishImmediately ? sD : fD);
const Hi = (a) => (a && a.env.closestScrollable) || null;
function dD(a) {
  const i = X.useRef(null),
    r = Zi(ki),
    o = fs("droppable"),
    { registry: s, marshal: f } = r,
    p = sh(a),
    y = vt(
      () => ({ id: a.droppableId, type: a.type, mode: a.mode }),
      [a.droppableId, a.mode, a.type],
    ),
    g = X.useRef(y),
    m = vt(
      () =>
        $t((Q, W) => {
          i.current || w();
          const F = { x: Q, y: W };
          f.updateDroppableScroll(y.id, F);
        }),
      [y.id, f],
    ),
    S = P(() => {
      const Q = i.current;
      return !Q || !Q.env.closestScrollable ? kt : Qo(Q.env.closestScrollable);
    }, []),
    v = P(() => {
      const Q = S();
      m(Q.x, Q.y);
    }, [S, m]),
    b = vt(() => cu(v), [v]),
    A = P(() => {
      const Q = i.current,
        W = Hi(Q);
      if (((Q && W) || w(), Q.scrollOptions.shouldPublishImmediately)) {
        v();
        return;
      }
      b();
    }, [b, v]),
    _ = P(
      (Q, W) => {
        i.current && w();
        const F = p.current,
          Z = F.getDroppableRef();
        Z || w();
        const it = iD(Z),
          Ht = { ref: Z, descriptor: y, env: it, scrollOptions: W };
        i.current = Ht;
        const yt = oD({
            ref: Z,
            descriptor: y,
            env: it,
            windowScroll: Q,
            direction: F.direction,
            isDropDisabled: F.isDropDisabled,
            isCombineEnabled: F.isCombineEnabled,
            shouldClipSubject: !F.ignoreContainerClipping,
          }),
          bt = it.closestScrollable;
        return (
          bt &&
            (bt.setAttribute(tg.contextId, r.contextId),
            bt.addEventListener("scroll", A, ig(Ht.scrollOptions))),
          yt
        );
      },
      [r.contextId, y, A, p],
    ),
    H = P(() => {
      const Q = i.current,
        W = Hi(Q);
      return ((Q && W) || w(), Qo(W));
    }, []),
    B = P(() => {
      const Q = i.current;
      Q || w();
      const W = Hi(Q);
      ((i.current = null),
        W &&
          (b.cancel(),
          W.removeAttribute(tg.contextId),
          W.removeEventListener("scroll", A, ig(Q.scrollOptions))));
    }, [A, b]),
    Y = P((Q) => {
      const W = i.current;
      W || w();
      const F = Hi(W);
      (F || w(), (F.scrollTop += Q.y), (F.scrollLeft += Q.x));
    }, []),
    V = vt(
      () => ({
        getDimensionAndWatchScroll: _,
        getScrollWhileDragging: H,
        dragStopped: B,
        scroll: Y,
      }),
      [B, _, H, Y],
    ),
    I = vt(() => ({ uniqueId: o, descriptor: y, callbacks: V }), [V, y, o]);
  (_e(
    () => (
      (g.current = I.descriptor),
      s.droppable.register(I),
      () => {
        (i.current && B(), s.droppable.unregister(I));
      }
    ),
    [V, y, B, I, f, s.droppable],
  ),
    _e(() => {
      i.current && f.updateDroppableIsEnabled(g.current.id, !a.isDropDisabled);
    }, [a.isDropDisabled, f]),
    _e(() => {
      i.current &&
        f.updateDroppableIsCombineEnabled(g.current.id, a.isCombineEnabled);
    }, [a.isCombineEnabled, f]));
}
function Uo() {}
const cg = { width: 0, height: 0, margin: b0 },
  pD = ({ isAnimatingOpenOnMount: a, placeholder: i, animate: r }) =>
    a || r === "close"
      ? cg
      : {
          height: i.client.borderBox.height,
          width: i.client.borderBox.width,
          margin: i.client.margin,
        },
  mD = ({ isAnimatingOpenOnMount: a, placeholder: i, animate: r }) => {
    const o = pD({ isAnimatingOpenOnMount: a, placeholder: i, animate: r });
    return {
      display: i.display,
      boxSizing: "border-box",
      width: o.width,
      height: o.height,
      marginTop: o.margin.top,
      marginRight: o.margin.right,
      marginBottom: o.margin.bottom,
      marginLeft: o.margin.left,
      flexShrink: "0",
      flexGrow: "0",
      pointerEvents: "none",
      transition: r !== "none" ? iu.placeholder : null,
    };
  },
  gD = (a) => {
    const i = X.useRef(null),
      r = P(() => {
        i.current && (clearTimeout(i.current), (i.current = null));
      }, []),
      { animate: o, onTransitionEnd: s, onClose: f, contextId: p } = a,
      [y, g] = X.useState(a.animate === "open");
    X.useEffect(
      () =>
        y
          ? o !== "open"
            ? (r(), g(!1), Uo)
            : i.current
              ? Uo
              : ((i.current = setTimeout(() => {
                  ((i.current = null), g(!1));
                })),
                r)
          : Uo,
      [o, y, r],
    );
    const m = P(
        (v) => {
          v.propertyName === "height" && (s(), o === "close" && f());
        },
        [o, f, s],
      ),
      S = mD({
        isAnimatingOpenOnMount: y,
        animate: a.animate,
        placeholder: a.placeholder,
      });
    return Xt.createElement(a.placeholder.tagName, {
      style: S,
      "data-rfd-placeholder-context-id": p,
      onTransitionEnd: m,
      ref: a.innerRef,
    });
  };
var hD = Xt.memo(gD);
class yD extends Xt.PureComponent {
  constructor(...i) {
    (super(...i),
      (this.state = {
        isVisible: !!this.props.on,
        data: this.props.on,
        animate: this.props.shouldAnimate && this.props.on ? "open" : "none",
      }),
      (this.onClose = () => {
        this.state.animate === "close" && this.setState({ isVisible: !1 });
      }));
  }
  static getDerivedStateFromProps(i, r) {
    return i.shouldAnimate
      ? i.on
        ? { isVisible: !0, data: i.on, animate: "open" }
        : r.isVisible
          ? { isVisible: !0, data: r.data, animate: "close" }
          : { isVisible: !1, animate: "close", data: null }
      : { isVisible: !!i.on, data: i.on, animate: "none" };
  }
  render() {
    if (!this.state.isVisible) return null;
    const i = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate,
    };
    return this.props.children(i);
  }
}
const vD = (a) => {
  const i = X.useContext(ki);
  i || w();
  const { contextId: r, isMovementAllowed: o } = i,
    s = X.useRef(null),
    f = X.useRef(null),
    {
      children: p,
      droppableId: y,
      type: g,
      mode: m,
      direction: S,
      ignoreContainerClipping: v,
      isDropDisabled: b,
      isCombineEnabled: A,
      snapshot: _,
      useClone: H,
      updateViewportMaxScroll: B,
      getContainerForClone: Y,
    } = a,
    V = P(() => s.current, []),
    I = P((bt = null) => {
      s.current = bt;
    }, []);
  P(() => f.current, []);
  const Q = P((bt = null) => {
      f.current = bt;
    }, []),
    W = P(() => {
      o() && B({ maxScroll: lh() });
    }, [o, B]);
  dD({
    droppableId: y,
    type: g,
    mode: m,
    direction: S,
    isDropDisabled: b,
    isCombineEnabled: A,
    ignoreContainerClipping: v,
    getDroppableRef: V,
  });
  const F = vt(
      () =>
        Xt.createElement(
          yD,
          { on: a.placeholder, shouldAnimate: a.shouldAnimatePlaceholder },
          ({ onClose: bt, data: Ot, animate: nt }) =>
            Xt.createElement(hD, {
              placeholder: Ot,
              onClose: bt,
              innerRef: Q,
              animate: nt,
              contextId: r,
              onTransitionEnd: W,
            }),
        ),
      [r, W, a.placeholder, a.shouldAnimatePlaceholder, Q],
    ),
    Z = vt(
      () => ({
        innerRef: I,
        placeholder: F,
        droppableProps: {
          "data-rfd-droppable-id": y,
          "data-rfd-droppable-context-id": r,
        },
      }),
      [r, y, F, I],
    ),
    it = H ? H.dragging.draggableId : null,
    Ht = vt(
      () => ({ droppableId: y, type: g, isUsingCloneFor: it }),
      [y, it, g],
    );
  function yt() {
    if (!H) return null;
    const { dragging: bt, render: Ot } = H,
      nt = Xt.createElement(
        Sh,
        {
          draggableId: bt.draggableId,
          index: bt.source.index,
          isClone: !0,
          isEnabled: !0,
          shouldRespectForcePress: !1,
          canDragInteractiveElements: !0,
        },
        (st, gt) => Ot(st, gt, bt),
      );
    return ab.createPortal(nt, Y());
  }
  return Xt.createElement(ps.Provider, { value: Ht }, p(Z, _), yt());
};
function bD() {
  return (document.body || w(), document.body);
}
const rg = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: bD,
  },
  Th = (a) => {
    let i = { ...a },
      r;
    for (r in rg) a[r] === void 0 && (i = { ...i, [r]: rg[r] });
    return i;
  },
  Ho = (a, i) => a === i.droppable.type,
  og = (a, i) => i.draggables[a.draggable.id],
  SD = () => {
    const a = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
          isDraggingOver: !1,
          draggingOverWith: null,
          draggingFromThisWith: null,
          isUsingPlaceholder: !1,
        },
        useClone: null,
      },
      i = { ...a, shouldAnimatePlaceholder: !1 },
      r = $t((f) => ({
        draggableId: f.id,
        type: f.type,
        source: { index: f.index, droppableId: f.droppableId },
      })),
      o = $t((f, p, y, g, m, S) => {
        const v = m.descriptor.id;
        if (m.descriptor.droppableId === f) {
          const _ = S ? { render: S, dragging: r(m.descriptor) } : null,
            H = {
              isDraggingOver: y,
              draggingOverWith: y ? v : null,
              draggingFromThisWith: v,
              isUsingPlaceholder: !0,
            };
          return {
            placeholder: m.placeholder,
            shouldAnimatePlaceholder: !1,
            snapshot: H,
            useClone: _,
          };
        }
        if (!p) return i;
        if (!g) return a;
        const A = {
          isDraggingOver: y,
          draggingOverWith: v,
          draggingFromThisWith: null,
          isUsingPlaceholder: !0,
        };
        return {
          placeholder: m.placeholder,
          shouldAnimatePlaceholder: !0,
          snapshot: A,
          useClone: null,
        };
      });
    return (f, p) => {
      const y = Th(p),
        g = y.droppableId,
        m = y.type,
        S = !y.isDropDisabled,
        v = y.renderClone;
      if (pu(f)) {
        const b = f.critical;
        if (!Ho(m, b)) return i;
        const A = og(b, f.dimensions),
          _ = Me(f.impact) === g;
        return o(g, S, _, _, A, v);
      }
      if (f.phase === "DROP_ANIMATING") {
        const b = f.completed;
        if (!Ho(m, b.critical)) return i;
        const A = og(b.critical, f.dimensions);
        return o(g, S, vh(b.result) === g, Me(b.impact) === g, A, v);
      }
      if (f.phase === "IDLE" && f.completed && !f.shouldFlush) {
        const b = f.completed;
        if (!Ho(m, b.critical)) return i;
        const A = Me(b.impact) === g,
          _ = !!(b.impact.at && b.impact.at.type === "COMBINE"),
          H = b.critical.droppable.id === g;
        return A ? (_ ? a : i) : H ? a : i;
      }
      return i;
    };
  },
  ED = { updateViewportMaxScroll: _S },
  Oh = Dg(SD, ED, (a, i, r) => ({ ...Th(r), ...a, ...i }), {
    context: ss,
    areStatePropsEqual: yh,
  })(vD);
function DD({ text: a, color: i }) {
  return lt.jsx("div", {
    className: "tier xy-centered",
    style: { backgroundColor: i },
    children: a,
  });
}
function sg({ image: a, text: i }) {
  return a === ""
    ? lt.jsx("div", { className: "ranked-element xy-centered", children: i })
    : lt.jsx("div", {
        className: "ranked-element xy-centered",
        style: { backgroundImage: "url(" + a + ")" },
      });
}
function fg({ uniqueDropId: a, color: i, rankedElementData: r }) {
  return lt.jsxs("div", {
    className: "flex",
    children: [
      i != "" && lt.jsx(DD, { text: a, color: i }),
      lt.jsx(Oh, {
        droppableId: a,
        direction: "horizontal",
        children: (o) =>
          lt.jsxs("ul", {
            className:
              i != "" ? "horizontal-list" : "larger-list horizontal-list",
            ...o.droppableProps,
            ref: o.innerRef,
            children: [
              r.map((s, f) =>
                window.isPublicView
                  ? lt.jsx(
                      "li",
                      {
                        children: lt.jsx(sg, { text: s.text, image: s.image }),
                      },
                      "{currentElement.id}",
                    )
                  : lt.jsx(
                      eD,
                      {
                        draggableId: s.id,
                        index: f,
                        children: (p) =>
                          lt.jsx("li", {
                            ...p.draggableProps,
                            ...p.dragHandleProps,
                            ref: p.innerRef,
                            children: lt.jsx(sg, {
                              text: s.text,
                              image: s.image,
                            }),
                          }),
                      },
                      s.id,
                    ),
              ),
              o.placeholder,
            ],
          }),
      }),
      lt.jsx("br", {}),
    ],
  });
}
function AD() {
  return lt.jsxs("div", {
    className: "flex",
    children: [
      lt.jsx(Oh, {
        droppableId: "deleteRankedElement",
        direction: "horizontal",
        children: (a) =>
          lt.jsx("ul", {
            className: "trash-can",
            ...a.droppableProps,
            ref: a.innerRef,
            children: a.placeholder,
          }),
      }),
      lt.jsx("br", {}),
    ],
  });
}
const ue = [];
for (let a = 0; a < 256; ++a) ue.push((a + 256).toString(16).slice(1));
function TD(a, i = 0) {
  return (
    ue[a[i + 0]] +
    ue[a[i + 1]] +
    ue[a[i + 2]] +
    ue[a[i + 3]] +
    "-" +
    ue[a[i + 4]] +
    ue[a[i + 5]] +
    "-" +
    ue[a[i + 6]] +
    ue[a[i + 7]] +
    "-" +
    ue[a[i + 8]] +
    ue[a[i + 9]] +
    "-" +
    ue[a[i + 10]] +
    ue[a[i + 11]] +
    ue[a[i + 12]] +
    ue[a[i + 13]] +
    ue[a[i + 14]] +
    ue[a[i + 15]]
  ).toLowerCase();
}
let Go;
const OD = new Uint8Array(16);
function xD() {
  if (!Go) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    Go = crypto.getRandomValues.bind(crypto);
  }
  return Go(OD);
}
const CD =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  dg = { randomUUID: CD };
function RD(a, i, r) {
  a = a || {};
  const o = a.random ?? a.rng?.() ?? xD();
  if (o.length < 16) throw new Error("Random bytes length must be >= 16");
  return ((o[6] = (o[6] & 15) | 64), (o[8] = (o[8] & 63) | 128), TD(o));
}
function ND(a, i, r) {
  return dg.randomUUID && !a ? dg.randomUUID() : RD(a);
}
function MD({ metadata: a, data: i }) {
  const [r, o] = X.useState(i),
    [s, f] = X.useState(a.title),
    [p, y] = X.useState(a.description),
    [g, m] = X.useState([]),
    S = 0,
    v = 1,
    b = "",
    A = "",
    _ = "",
    H = "containedElementIds",
    B = "placeholderContainer",
    Y = r[B][H],
    V = "urlSubmission",
    I = "deleteRankedElement",
    Q = Object.keys(i);
  function W(nt, st, gt) {
    return (nt[B][H].push({ id: ND(), text: st, image: gt }), nt);
  }
  function F(nt) {
    const st = nt.target.files,
      gt = structuredClone(r);
    for (let M = 0; M < st.length; M++) {
      let q = URL.createObjectURL(st[M]);
      W(gt, A, q);
    }
    o(gt);
  }
  function Z(nt) {
    nt.preventDefault();
    const st = structuredClone(r),
      gt = nt.target.id,
      M = nt.target[0].value;
    (gt == V ? W(st, _, M) : W(st, M, _), (nt.target[0].value = ""), o(st));
  }
  function it(nt) {
    if (!nt.destination) return;
    const st = nt.source.droppableId,
      gt = nt.destination.droppableId,
      M = structuredClone(r),
      q = M[st][H],
      [k] = q.splice(nt.source.index, v);
    (st === gt
      ? q.splice(nt.destination.index, S, k)
      : gt != I && M[gt][H].splice(nt.destination.index, S, k),
      o(M));
  }
  function Ht() {
    return { title: s, description: p, payload: r };
  }
  async function yt() {
    if (window.isPublicView === !0) return;
    const nt = Ht(),
      st = await fetch("/save-list", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(nt),
      });
    if (!st.ok) {
      console.error("Failed to save list");
      return;
    }
    const gt = await st.json();
    window.location.href = `/dashboard?index=${gt.index}`;
  }
  async function bt() {
    const st = await (await fetch("/get-lists")).json();
    m(st);
  }
  function Ot(nt) {
    const st = g[nt];
    st && (f(st.title), y(st.description), o(st.payload));
  }
  return lt.jsxs(lt.Fragment, {
    children: [
      lt.jsx("input", {
        type: "text",
        value: s,
        onChange: (nt) => f(nt.target.value),
      }),
      " ",
      lt.jsx("br", {}),
      lt.jsx("textarea", { value: p, onChange: (nt) => y(nt.target.value) }),
      !window.isPublicView &&
        lt.jsx("button", { onClick: yt, children: " Save List " }),
      lt.jsx("button", {
        hidden: !0,
        onClick: bt,
        children: " pull up the saved lists ",
      }),
      g.map((nt, st) =>
        lt.jsx("button", { onClick: () => Ot(st), children: nt.title }, st),
      ),
      lt.jsxs("div", {
        className: "max-width",
        children: [
          lt.jsx("span", {
            className: "left-aligned",
            children: lt.jsxs(GE, {
              onDragEnd: it,
              children: [
                Q.map(
                  (nt, st) =>
                    st < Q.length - 1 &&
                    lt.jsx(
                      fg,
                      {
                        uniqueDropId: r[nt].id,
                        color: r[nt].color,
                        rankedElementData: r[nt][H],
                      },
                      r[nt].id,
                    ),
                ),
                lt.jsx(fg, { uniqueDropId: B, color: b, rankedElementData: Y }),
                lt.jsx("h2", { children: "Delete Elements (Drag to Delete)" }),
                lt.jsx(AD, {}),
              ],
            }),
          }),
          lt.jsxs("span", {
            className: "inline-block",
            children: [
              lt.jsx("h2", {
                children: "Create Elements",
              }),
              lt.jsx("h3", { children: "Image Element by File Upload",
                id: "fileUploadHeader"
              }),
              lt.jsx("input", {
                type: "file",
                id: "imageSubmission",
                onChange: F,
                multiple: !0,
              }),
              lt.jsx("h3", { children: "Image Element by Image URL" }),
              lt.jsxs("form", {
                id: "urlSubmission",
                onSubmit: Z,
                children: [
                  lt.jsx("input", { type: "text", id: "abcde" }),
                  lt.jsx("button", {
                    type: "submit",
                    id: "gfdsg",
                    children: "Submit",
                  }),
                ],
              }),
              lt.jsx("h3", { children: "Text Element" }),
              lt.jsxs("form", {
                id: "textSubmission",
                onSubmit: Z,
                children: [
                  lt.jsx("input", { type: "text", id: "abcd" }),
                  lt.jsx("button", {
                    type: "submit",
                    id: "gfds",
                    children: "Submit",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Pe = window.currentlist;
console.log("window.currentlist", Pe);
console.log("payload keys", Pe ? Object.keys(Pe.payload) : null);
console.log("payload.s", Pe?.payload?.s);
console.log("payload.S", Pe?.payload?.S);
const _D = Pe
    ? { title: Pe.title, description: Pe.description }
    : {
        title: "New Tier List",
        description: "Write a custom description here...",
      },
  zD = Pe
    ? Pe.payload
    : {
        S: { id: "S", color: "salmon", containedElementIds: [] },
        A: { id: "A", color: "orange", containedElementIds: [] },
        B: { id: "B", color: "yellow", containedElementIds: [] },
        C: { id: "C", color: "lightgreen", containedElementIds: [] },
        D: { id: "D", color: "skyblue", containedElementIds: [] },
        F: { id: "F", color: "plum", containedElementIds: [] },
        placeholderContainer: {
          id: "placeholderContainer",
          color: "",
          containedElementIds: [],
        },
      };
function BD() {
  return lt.jsx(lt.Fragment, {
    children: lt.jsx(MD, { metadata: _D, data: zD }),
  });
}
lb.createRoot(document.getElementById("root")).render(
  lt.jsx(X.StrictMode, { children: lt.jsx(BD, {}) }),
);
