/* (c) 2008, 2009, 2010 Add This, LLC */
if (!window._ate) {
    var _atd = "www.addthis.com/",
        _atr = "//s7.addthis.com/",
        _atn = "//l.addthiscdn.com/",
        _euc = encodeURIComponent,
        _duc = decodeURIComponent,
        _atu = "undefined",
        _atc = {
            dr: 0,
            ver: 250,
            loc: 0,
            enote: "",
            cwait: 500,
            tamp: -1,
            xamp: 0,
            camp: 1,
            vamp: 1,
            famp: 0.02,
            pamp: 0.2,
            addr: -1,
            addt: 1,
            abf: !! window.addthis_do_ab
        };
    (function () {
        try {
            var G = window.location;
            if (G.protocol.indexOf("file") === 0) {
                _atr = "http:" + _atr
            }
            if (G.hostname.indexOf("localhost") != -1) {
                _atc.loc = 1
            }
        } catch (M) {}
        var K = navigator.userAgent.toLowerCase(),
            N = document,
            u = window,
            t = u.addEventListener,
            m = u.attachEvent,
            I = N.location,
            O = {
                win: /windows/.test(K),
                xp: /windows nt 5.1/.test(K) || /windows nt 5.2/.test(K),
                chr: /chrome/.test(K),
                iph: /iphone/.test(K),
                ipa: /ipad/.test(K),
                saf: /safari/.test(K),
                web: /webkit/.test(K),
                opr: /opera/.test(K),
                msi: (/msie/.test(K)) && !(/opera/.test(K)),
                ffx: /firefox/.test(K),
                ff2: /firefox\/2/.test(K),
                ie6: /msie 6.0/.test(K),
                ie7: /msie 7.0/.test(K),
                mod: -1
            },
            f = {
                vst: [],
                rrev: "76399",
                rev: "$Rev: 76399 $",
                bro: O,
                show: 1,
                dl: I,
                upm: !! u.postMessage && ("" + u.postMessage).toLowerCase().indexOf("[native code]") !== -1,
                camp: _atc.camp - Math.random(),
                xamp: _atc.xamp - Math.random(),
                vamp: _atc.vamp - Math.random(),
                pamp: _atc.pamp - Math.random(),
                ab: "-",
                seq: 1,
                dcp: 0,
                inst: 1,
                wait: 500,
                tmo: null,
                cvt: [],
                avt: null,
                sttm: new Date().getTime(),
                max: 4294967295,
                pix: "tev",
                sid: 0,
                sub: !! window.at_sub,
                dbm: 0,
                uid: null,
                spt: "static/r07/widget18.png",
                api: {},
                imgz: [],
                hash: window.location.hash
            };
        N.ce = N.createElement;
        N.gn = N.getElementsByTagName;
        window._ate = f;
        var v = function (r, p, q, d) {
            if (!r) {
                return q
            }
            if (r instanceof Array || (r.length && (typeof r !== "function"))) {
                for (var l = 0, a = r.length, b = r[0]; l < a; b = r[++l]) {
                    q = p.call(d || r, q, b, l, r)
                }
            } else {
                for (var e in r) {
                    q = p.call(d || r, q, r[e], e, r)
                }
            }
            return q
        },
            B = Array.prototype.slice,
            D = function (b) {
                return B.apply(b, B.call(arguments, 1))
            },
            C = function (a) {
                return ("" + a).replace(/(^\s+|\s+$)/g, "")
            },
            L = function (a, b) {
                return v(D(arguments, 1), function (e, d) {
                    return v(d, function (p, l, i) {
                        p[i] = l;
                        return p
                    }, e)
                }, a)
            },
            n = function (b, a) {
                return v(b, function (i, e, d) {
                    d = C(d);
                    if (d) {
                        i.push(_euc(d) + "=" + _euc(C(e)))
                    }
                    return i
                }, []).join(a || "&")
            },
            j = function (b, a) {
                return v((b || "").split(a || "&"), function (p, r) {
                    try {
                        var l = r.split("="),
                            i = C(_duc(l[0])),
                            d = C(_duc(l.slice(1).join("=")));
                        if (i) {
                            p[i] = d
                        }
                    } catch (q) {}
                    return p
                }, {})
            },
            Q = function () {
                var a = D(arguments, 0),
                    d = a.shift(),
                    b = a.shift();
                return function () {
                    return d.apply(b, a.concat(D(arguments, 0)))
                }
            },
            H = function (b, e, a, d) {
                if (!e) {
                    return
                }
                if (m) {
                    e[(b ? "detach" : "attach") + "Event"]("on" + a, d)
                } else {
                    e[(b ? "remove" : "add") + "EventListener"](a, d, false)
                }
            },
            k = function (d, a, b) {
                H(0, d, a, b)
            },
            g = function (d, a, b) {
                H(1, d, a, b)
            },
            c = {
                reduce: v,
                slice: D,
                strip: C,
                extend: L,
                toKV: n,
                fromKV: j,
                bind: Q,
                listen: k,
                unlisten: g
            };
        f.util = c;
        L(f, c);
        (function (p, r, s) {
            var i, R = p.util;

            function q(U, T, W, S, V) {
                this.type = U;
                this.triggerType = T || U;
                this.target = W || S;
                this.triggerTarget = S || W;
                this.data = V || {}
            }
            R.extend(q.prototype, {
                constructor: q,
                bubbles: false,
                preventDefault: R.noop,
                stopPropagation: R.noop,
                clone: function () {
                    return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, R.extend({}, this.data))
                }
            });

            function e(S, T) {
                this.target = S;
                this.queues = {};
                this.defaultEventType = T || q
            }
            function a(S) {
                var T = this.queues;
                if (!T[S]) {
                    T[S] = []
                }
                return T[S]
            }
            function l(S, T) {
                this.getQueue(S).push(T)
            }
            function d(T, U) {
                var V = this.getQueue(T),
                    S = V.indexOf(U);
                if (S !== -1) {
                    V.splice(S, 1)
                }
            }
            function b(S, W, V, U) {
                var T = this;
                if (!U) {
                    setTimeout(function () {
                        T.dispatchEvent(new T.defaultEventType(S, S, W, T.target, V))
                    }, 10)
                } else {
                    T.dispatchEvent(new T.defaultEventType(S, S, W, T.target, V))
                }
            }
            function w(T) {
                for (var U = 0, W = T.target, V = this.getQueue(T.type), S = V.length; U < S; U++) {
                    V[U].call(W, T.clone())
                }
            }
            R.extend(e.prototype, {
                constructor: e,
                getQueue: a,
                addEventListener: l,
                removeEventListener: d,
                dispatchEvent: w,
                fire: b
            });
            p.event = {
                PolyEvent: q,
                EventDispatcher: e
            }
        })(f, f.api, f);
        f.ed = new f.event.EventDispatcher(f);
        var o = {
            isBound: false,
            isReady: false,
            readyList: [],
            onReady: function () {
                if (!o.isReady) {
                    o.isReady = true;
                    var a = o.readyList.concat(window.addthis_onload || []);
                    for (var b = 0; b < a.length; b++) {
                        a[b].call(window)
                    }
                    o.readyList = []
                }
            },
            addLoad: function (a) {
                var b = u.onload;
                if (typeof u.onload != "function") {
                    u.onload = a
                } else {
                    u.onload = function () {
                        if (b) {
                            b()
                        }
                        a()
                    }
                }
            },
            bindReady: function () {
                if (y.isBound) {
                    return
                }
                y.isBound = true;
                if (N.addEventListener && !O.opr) {
                    N.addEventListener("DOMContentLoaded", y.onReady, false)
                }
                var a = window.addthis_product;
                if (a && a.indexOf("f") > -1) {
                    y.onReady();
                    return
                }
                if (O.msi && window == top) {
                    (function () {
                        if (y.isReady) {
                            return
                        }
                        try {
                            N.documentElement.doScroll("left")
                        } catch (d) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        y.onReady()
                    })()
                }
                if (O.opr) {
                    N.addEventListener("DOMContentLoaded", function () {
                        if (y.isReady) {
                            return
                        }
                        for (var d = 0; d < N.styleSheets.length; d++) {
                            if (N.styleSheets[d].disabled) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                        }
                        y.onReady()
                    }, false)
                }
                if (O.saf) {
                    var b;
                    (function () {
                        if (y.isReady) {
                            return
                        }
                        if (N.readyState != "loaded" && N.readyState != "complete") {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        if (b === undefined) {
                            var d = N.gn("link");
                            for (var e = 0; e < d.length; e++) {
                                if (d[e].getAttribute("rel") == "stylesheet") {
                                    b++
                                }
                            }
                            var l = N.gn("style");
                            b += l.length
                        }
                        if (N.styleSheets.length != b) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        y.onReady()
                    })()
                }
                y.addLoad(y.onReady)
            },
            append: function (b, a) {
                y.bindReady();
                if (y.isReady) {
                    b.call(window, [])
                } else {
                    y.readyList.push(function () {
                        return b.call(window, [])
                    })
                }
            }
        },
            y = o,
            P = f;
        L(f, {
            plo: [],
            lad: function (a) {
                f.plo.push(a)
            }
        });
        L(f, {
            pub: function () {
                return _euc(window.addthis_config && addthis_config.username ? addthis_config.username : (window.addthis_pub || ""))
            },
            igv: function (a, b) {
                if (!u.addthis_share) {
                    u.addthis_share = {}
                }
                if (!addthis_share.url) {
                    u.addthis_share.url = u.addthis_url || a
                }
                if (!addthis_share.title) {
                    u.addthis_share.title = u.addthis_title || b
                }
                if (!u.addthis_config) {
                    u.addthis_config = {
                        username: u.addthis_pub
                    }
                } else {
                    if (addthis_config.data_use_cookies === false) {
                        _atc.xck = 1
                    }
                }
            }
        });
        if (!_atc.ost) {
            if (!u.addthis_conf) {
                u.addthis_conf = {}
            }
            for (var J in addthis_conf) {
                _atc[J] = addthis_conf[J]
            }
            _atc.ost = 1
        }
        L(f, {
            qtp: [],
            xtp: function () {
                var b = f,
                    d;
                while (d = b.qtp.pop()) {
                    b.trk(d)
                }
            },
            gat: function () {},
            atf: null,
            get_atssh: function () {
                var e = document,
                    b = f,
                    i = e.getElementById("_atssh");
                if (!i) {
                    i = e.ce("div");
                    i.style.visibility = "hidden";
                    i.id = "_atssh";
                    b.opp(i.style);
                    e.body.insertBefore(i, e.body.firstChild)
                }
                return i
            },
            ctf: function (i, q) {
                var p = document,
                    e = window,
                    b = f,
                    s, l = Math.floor(Math.random() * 1000);
                div = b.get_atssh();
                if (!b.bro.msi) {
                    s = p.ce("iframe");
                    s.id = "_atssh" + l
                } else {
                    if (b.bro.ie6 && !i) {
                        i = "javascript:''"
                    }
                    div.innerHTML = '<iframe id="_atssh' + l + '" width="1" height="1" name="_atssh' + l + '" ' + (!b.upm && q ? 'onload="' + q + '" ' : "") + (i ? 'src="' + i + '"' : "") + ">";
                    s = p.getElementById("_atssh" + l)
                }
                b.opp(s.style);
                s.frameborder = s.style.border = 0;
                s.style.top = s.style.left = 0;
                return s
            },
            off: function () {
                return Math.floor((new Date().getTime() - f.sttm) / 100).toString(16)
            },
            omp: function (b, d, e) {
                var a = {};
                if (b) {
                    a.sh = b
                }
                if (d) {
                    a.cm = d
                }
                if (e) {
                    a.cs = e
                }
                f.img("sh", "3", null, a)
            },
            trk: function (e) {
                var d = f,
                    i = d.dr,
                    b = ((d.rev || "").split(" "));
                if (!e) {
                    return
                }
                if (i) {
                    i = i.split("http://").pop()
                }
                e.xxl = 1;
                e.sid = d.ssid();
                e.pub = d.pub();
                e.ssl = d.ssl || 0;
                e.du = d.tru(d.du || d.dl.href);
                if (d.dt) {
                    e.dt = d.dt
                }
                e.lng = d.lng();
                e.ver = _atc.ver;
                if (!d.upm && d.uid) {
                    e.uid = d.uid
                }
                e.pc = window.addthis_product || "men-" + _atc.ver;
                if (i) {
                    e.dr = d.tru(i)
                }
                if (b.length > 1) {
                    e.rev = b[1]
                }
                if (d.xfr) {
                    if (d.upm) {
                        if (d.atf) {
                            d.atf.contentWindow.postMessage(n(e), "*")
                        }
                    } else {
                        var l = d.get_atssh();
                        base = "static/r07/sh16.html" + (false ? "?t=" + new Date().getTime() : "");
                        if (d.atf) {
                            l.removeChild(l.firstChild)
                        }
                        d.atf = d.ctf();
                        d.atf.src = _atr + base + "#" + n(e);
                        l.appendChild(d.atf)
                    }
                } else {
                    f.qtp.push(e)
                }
            },
            img: function (l, r, b, p, q) {
                if (!window.at_sub && !_atc.xtr) {
                    var d = f,
                        e = p || {};
                    e.evt = l;
                    if (b) {
                        e.ext = b
                    }
                    d.avt = e;
                    if (q === 1) {
                        f.xmi(true)
                    } else {
                        f.sxm(true)
                    }
                }
            },
            cuid: function () {
                return ((f.sttm / 1000) & f.max).toString(16) + ("00000000" + (Math.floor(Math.random() * (f.max + 1))).toString(16)).slice(-8)
            },
            ssid: function () {
                if (f.sid === 0) {
                    f.sid = f.cuid()
                }
                return f.sid
            },
            sta: function () {
                var b = f;
                return "AT-" + (b.pub() ? b.pub() : "unknown") + "/-/" + b.ab + "/" + b.ssid() + "/" + (b.seq++) + (b.uid !== null ? "/" + b.uid : "")
            },
            cst: function (a) {
                return "CXNID=2000001.521545608054043907" + (a || 2) + "NXC"
            },
            fcv: function (b, a) {
                return _euc(b) + "=" + _euc(a) + ";" + f.off()
            },
            cev: function (b, a) {
                f.pix = "cev-" + _euc(b);
                f.cvt.push(f.fcv(b, a));
                f.sxm(true)
            },
            sxm: function (a) {
                if (f.tmo !== null) {
                    clearTimeout(f.tmo)
                }
                if (a) {
                    f.tmo = f.sto("_ate.xmi(false)", f.wait)
                }
            },
            xmi: function (r) {
                var b = f,
                    p = b.dl ? b.dl.hostname : "";
                if (b.cvt.length > 0 || b.avt) {
                    b.sxm(false);
                    if (_atc.xtr) {
                        return
                    }
                    var l = b.avt || {};
                    l.ce = b.cvt.join(",");
                    l.xck = _atc.xck ? 1 : 0;
                    b.cvt = [];
                    b.avt = null;
                    b.trk(l);
                    if (r) {
                        var q = document,
                            e = q.ce("iframe");
                        e.id = "_atf";
                        f.opp(e.style);
                        q.body.appendChild(e);
                        e = q.getElementById("_atf")
                    }
                }
            },
            kck: function (a) {
                var b = document;
                if (b.cookie) {
                    b.cookie = a + "= ; expires=Tue, 31 Mar 2009 05:47:11 UTC; path=/"
                }
            },
            rck: function (a) {
                var b = document;
                return j(b.cookie, ";")[a]
            },
            gov: function () {
                var b = f.dl ? f.dl.hostname : "";
                if (b.indexOf(".gov") > -1 || b.indexOf(".mil") > -1) {
                    _atc.xck = 1
                }
                var d = f.pub(),
                    a = ["usarmymedia", "govdelivery"];
                for (J in a) {
                    if (d == a[J]) {
                        _atc.xck = 1;
                        break
                    }
                }
            },
            sck: function (b, a, d) {
                f.gov();
                if (!_atc.xck) {
                    N.cookie = b + "=" + a + (!d ? "; expires=Wed, 04 Oct 2028 03:19:53 GMT" : "") + "; path=/; domain=" + (f.bro.msi ? "" : ".") + "addthis.com"
                }
            }
        });
        L(f, {
            _rec: [],
            rec: function (e) {
                if (!e) {
                    return
                }
                var q = j(e),
                    b = f,
                    d = b.atf,
                    l = b._rec,
                    w;
                if (q.ssh) {
                    b.ssh(q.ssh)
                }
                if (q.uid) {
                    b.uid = q.uid
                }
                if (q.dbm) {
                    b.dbm = q.dbm
                }
                if (q.rdy) {
                    b.xfr = 1;
                    b.xtp();
                    return
                }
                for (var R = 0; R < l.length; R++) {
                    l[R](q)
                }
            },
            xfr: !f.upm || !f.bro.ffx,
            ssh: function (b) {
                f.gssh = 1;
                var a = window.addthis_ssh = _duc(b);
                f._ssh = a.split(",")
            },
            com: function (a) {
                if (window.parent && window.postMessage) {
                    window.parent.postMessage(a, "*")
                } else {
                    f.ifm(a)
                }
            },
            ifwn: function () {
                var b = f;
                try {
                    b.rec(b.atf.contentWindow.name)
                } catch (d) {}
            },
            ifm: function (b) {
                if (addthis_wpl) {
                    var d = (addthis_wpl.split("#"))[0];
                    window.parent.location.href = d + "#at" + b
                }
                return false
            },
            pmh: function (a) {
                if (a.origin.slice(-12) == ".addthis.com") {
                    f.rec(a.data)
                }
            }
        });
        L(f, {
            lng: function () {
                return window.addthis_language || (window.addthis_config || {}).ui_language || (f.bro.msi ? navigator.userLanguage : navigator.language)
            },
            iwb: function (a) {
                var b = {
                    th: 1,
                    pl: 1,
                    sl: 1,
                    gl: 1,
                    hu: 1,
                    is: 1,
                    nb: 1
                };
                return !!b[a]
            },
            ivl: function (a) {
                var b = {
                    af: 1,
                    afr: "af",
                    ar: 1,
                    ara: "ar",
                    az: 1,
                    aze: "az",
                    be: 1,
                    bye: "be",
                    bg: 1,
                    bul: "bg",
                    bn: 1,
                    ben: "bn",
                    bs: 1,
                    bos: "bs",
                    ca: 1,
                    cat: "ca",
                    cs: 1,
                    ces: "cs",
                    cze: "cs",
                    cy: 1,
                    cym: "cy",
                    da: 1,
                    dan: "da",
                    de: 1,
                    deu: "de",
                    ger: "de",
                    el: 1,
                    gre: "el",
                    ell: "ell",
                    es: 1,
                    esl: "es",
                    spa: "spa",
                    et: 1,
                    est: "et",
                    fa: 1,
                    fas: "fa",
                    per: "fa",
                    fi: 1,
                    fin: "fi",
                    fo: 1,
                    fao: "fo",
                    fr: 1,
                    fra: "fr",
                    fre: "fr",
                    ga: 1,
                    gae: "ga",
                    gdh: "ga",
                    gl: 1,
                    glg: "gl",
                    he: 1,
                    heb: "he",
                    hi: 1,
                    hin: "hin",
                    hr: 1,
                    cro: "hr",
                    hu: 1,
                    hun: "hu",
                    id: 1,
                    ind: "id",
                    is: 1,
                    ice: "is",
                    it: 1,
                    ita: "it",
                    ja: 1,
                    jpn: "ja",
                    ko: 1,
                    kor: "ko",
                    lb: 1,
                    ltz: "lb",
                    lt: 1,
                    lit: "lt",
                    lv: 1,
                    lav: "lv",
                    mk: 1,
                    mac: "mk",
                    mak: "mk",
                    ms: 1,
                    msa: "ms",
                    may: "ms",
                    nb: 1,
                    nl: 1,
                    nla: "nl",
                    dut: "nl",
                    no: 1,
                    nno: "no",
                    oc: 1,
                    oci: "oc",
                    pl: 1,
                    pol: "pl",
                    pt: 1,
                    por: "pt",
                    ro: 1,
                    ron: "ro",
                    rum: "ro",
                    ru: 1,
                    rus: "ru",
                    sk: 1,
                    slk: "sk",
                    slo: "sk",
                    sl: 1,
                    slv: "sl",
                    sq: 1,
                    alb: "sq",
                    sr: 1,
                    ser: "sr",
                    sv: 1,
                    sve: "sv",
                    swe: "sv",
                    ta: 1,
                    tam: "ta",
                    te: 1,
                    teg: "te",
                    th: 1,
                    tha: "th",
                    tl: 1,
                    tgl: "tl",
                    tr: 1,
                    tur: "tr",
                    uk: 1,
                    ukr: "uk",
                    ur: 1,
                    urd: "ur",
                    vi: 1,
                    vie: "vi",
                    "zh-hk": 1,
                    "chi-hk": "zh-hk",
                    "zho-hk": "zh-hk",
                    "zh-tr": 1,
                    "chi-tr": "zh-tr",
                    "zho-tr": "zh-tr",
                    "zh-tw": 1,
                    "chi-tw": "zh-tw",
                    "zho-tw": "zh-tw",
                    zh: 1,
                    chi: "zh",
                    zho: "zh"
                };
                if (b[a]) {
                    return b[a]
                }
                a = a.split("-").shift();
                if (b[a]) {
                    if (b[a] === 1) {
                        return a
                    } else {
                        return b[a]
                    }
                }
                return 0
            },
            gvl: function (a) {
                var b = f.ivl(a) || "en";
                if (b === 1) {
                    b = a
                }
                return b
            },
            alg: function (i, e) {
                var p = document,
                    a = (i || f.lng() || "en").toLowerCase(),
                    b = f.ivl(a);
                if (a.indexOf("en") !== 0 && (!f.pll || e)) {
                    if (b) {
                        if (b !== 1) {
                            a = b
                        }
                        f.pll = f.ajs("static/r07/lang00/" + a + ".js")
                    }
                }
            }
        });
        L(f, {
            trim: function (a, b) {
                try {
                    a = a.replace(/^[\s\u3000]+|[\s\u3000]+$/g, "");
                    if (b) {
                        a = _euc(a)
                    }
                } catch (b) {}
                return a
            },
            trl: [],
            tru: function (b, a) {
                var d = "";
                if (b) {
                    d = b.substr(0, 300);
                    if (d != b) {
                        f.trl.push(a)
                    }
                }
                return d
            },
            mun: function (d) {
                var a = 291;
                if (d) {
                    for (var b = 0; b < d.length; b++) {
                        a = (a * (d.charCodeAt(b) + b) + 3) & 1048575
                    }
                }
                return (a & 16777215).toString(32)
            },
            ibt: function () {
                if (f.bti) {
                    return f.bti
                }
                var a = (window.addthis_product || "men").substr(0, 3),
                    b = a == "bkm" || a == "fct" || a == "fxe";
                if (b) {
                    f.bti = b
                }
                return b
            },
            sto: function (b, a) {
                return setTimeout(b, a)
            },
            opp: function (a) {
                a.width = a.height = "1px";
                a.position = "absolute";
                a.zIndex = 100000
            },
            jlr: {},
            ajs: function (a) {
                if (!f.jlr[a]) {
                    var b = N.ce("script");
                    b.src = _atr + a;
                    N.gn("head")[0].appendChild(b);
                    f.jlr[a] = 1;
                    return b
                }
                return 1
            },
            aig: function (b) {
                var a = new Image();
                f.imgz.push(a);
                a.src = b
            },
            jlo: function () {
                try {
                    var p = document,
                        b = f,
                        l = b.lng();
                    b.alg(l);
                    if (!b.pld) {
                        if (b.bro.ie6) {
                            b.aig(_atr + b.spt);
                            b.aig("//s7.addthis.com/static/t00/logo1414.gif");
                            b.aig("//s7.addthis.com/static/t00/logo88.gif");
                            if (window.addthis_feed) {
                                b.aig(_atr + "static/r05/feed00.gif")
                            }
                        }
                        if (b.pll && !window.addthis_translations) {
                            b.sto(function () {
                                b.pld = b.ajs("static/r07/menu52.js")
                            }, 10)
                        } else {
                            b.pld = b.ajs("static/r07/menu52.js")
                        }
                    }
                } catch (i) {}
            },
            ao: function (b, l, i, d, e, a) {
                f.lad(["open", b, l, i, d, e, a]);
                f.jlo();
                return false
            },
            ac: function () {},
            as: function (b, d, a) {
                f.lad(["send", b, d, a]);
                f.jlo()
            }
        });

        function h(r) {
            try {
                var U = window,
                    aj = f,
                    q = aj.bro.msi,
                    b = 0,
                    X = N.title,
                    Y = N.referer || N.referrer || "",
                    W = I ? I.href : null,
                    s = W,
                    af = I.hostname,
                    ai = W ? W.indexOf("sms_ss") : -1,
                    ag = ((r === 1 || U.addthis_load_flash) && !_atc.abf),
                    ab = ((U.addthis_language || (U.addthis_config ? U.addthis_config.ui_language : null) || (q ? navigator.userLanguage : navigator.language)).split("-")).shift(),
                    p = (I.href.indexOf(_atr) == -1 && !aj.sub),
                    ac = N.gn("link"),
                    d = _atr + "static/r07/sh16.html#",
                    Z = W && W.indexOf("https") === 0 ? 1 : 0,
                    S = "",
                    R;
                if (!aj.upm) {
                    var V = N.gn("img");
                    for (var ad = 0; ad < V.length; ad++) {
                        if (V[ad].src.split("//").pop().indexOf(af) == 0) {
                            S = V[ad].src;
                            break
                        }
                    }
                }
                for (var ad = 0; ad < ac.length; ad++) {
                    var aa = ac[ad];
                    if (aa.rel && aa.rel == "canonical" && aa.href) {
                        s = aa.href
                    }
                }
                aj.igv(s, N.title || "");
                aj.gov();
                aj.dr = aj.tru(Y, "fr");
                aj.du = aj.tru(s, "fp");
                aj.dt = X = U.addthis_share.title;
                aj.ssl = Z;
                var ak = {
                    ab: aj.ab,
                    dh: I.hostname,
                    dr: aj.dr,
                    du: aj.du,
                    dt: X,
                    inst: aj.inst,
                    lng: aj.lng(),
                    pc: window.addthis_product || "men",
                    pub: aj.pub(),
                    ssl: Z,
                    sid: f.ssid(),
                    srf: _atc.famp,
                    srp: _atc.pamp,
                    srx: _atc.xamp,
                    ver: _atc.ver,
                    xck: _atc.xck || 0
                };
                if (aj.trl.length) {
                    ak.trl = aj.trl.join(",")
                }
                if (aj.rev) {
                    ak.rev = aj.rev.split(" ").slice(1, 2)
                }
                if (!ag) {
                    if (ai > -1 && W.indexOf(_atd + "book") == -1) {
                        var T = [];
                        var ae = W.substr(ai);
                        ae = ae.split("&").shift().split("#").shift().split("=").pop();
                        ak.sr = ae;
                        if (aj.vamp >= 0 && !aj.sub && ae.length) {
                            T.push(aj.fcv("plv", Math.round(1 / _atc.vamp)));
                            T.push(aj.fcv("rsc", ae));
                            ak.ce = T.join(",")
                        }
                    }
                }
                if (aj.upm) {
                    ak.xd = 1;
                    if (f.bro.ffx) {
                        ak.xld = 1
                    }
                }
                if (p) {
                    if (aj.upm) {
                        if (q) {
                            R = aj.ctf(d + n(ak));
                            U.attachEvent("onmessage", aj.pmh)
                        } else {
                            R = aj.ctf();
                            U.addEventListener("message", aj.pmh, false)
                        }
                        if (f.bro.ffx) {
                            R.src = d;
                            f.qtp.push(ak)
                        } else {
                            if (!q) {
                                R.src = d + n(ak)
                            }
                        }
                    } else {
                        R = aj.ctf();
                        f.sto(function () {
                            ak.pc = window.addthis_product || "men" + _atc.ver;
                            R.src = d + n(ak)
                        }, f.wait)
                    }
                    if (R) {
                        aj.atf = R = aj.get_atssh().appendChild(R)
                    }
                }
                if (window.addthis_language || (window.addthis_config || {}).ui_language) {
                    aj.alg()
                }
                if (aj.plo.length > 0) {
                    aj.jlo()
                }
            } catch (ah) {}
        }
        o.bindReady();
        o.append(h);
        u._ate = P;
        u._adr = y;
        try {
            if (!_atc.xcs && (window.addthis_config || {}).ui_use_css !== false) {
                var G = N.ce("link");
                G.rel = "stylesheet";
                G.type = "text/css";
                G.href = _atr + "static/r07/widget37.css";
                G.media = "all";
                N.gn("head")[0].appendChild(G)
            }
        } catch (M) {}
        var F = N.gn("script"),
            x = F[F.length - 1],
            z = x.src.indexOf("#") > -1 ? x.src.replace(/^[^\#]+\#?/, "") : x.src.replace(/^[^\?]+\??/, ""),
            A = j(z);
        if (A.pub) {
            u.addthis_pub = _duc(A.pub)
        } else {
            if (A.username) {
                u.addthis_pub = _duc(A.username)
            }
        }
        if (u.addthis_pub && u.addthis_config) {
            u.addthis_config.username = u.addthis_pub
        }
        if (A.domready) {
            _atc.dr = 1
        }
        try {
            if (_atc.ver === 120) {
                var E = "atb" + u._ate.cuid();
                N.write('<span id="' + E + '"></span>');
                u._ate.igv();
                u._ate.lad(["span", E, addthis_share.url || "[url]", addthis_share.title || "[title]"])
            }
            if (u.addthis_clickout) {
                f.lad(["cout"])
            }
        } catch (M) {}
    })();

    function addthis_open(b, f, e, c, d, a) {
        if (typeof d == "string") {
            d = null
        }
        return _ate.ao(b, f, e, c, d, a)
    }
    function addthis_close() {
        _ate.ac()
    }
    function addthis_sendto(b, c, a) {
        _ate.as(b, c, a);
        return false
    }
    if (_atc.dr) {
        _adr.onReady()
    }
} else {
    _ate.inst++
}
if (_atc.abf) {
    addthis_open(document.getElementById("ab"), "emailab", window.addthis_url || "[URL]", window.addthis_title || "[TITLE]")
};
if (!window.addthis || window.addthis.nodeType !== undefined) {
    window.addthis = (function () {
        var g = {
            aim: "AIM",
            a1webmarks: "A1&#8209;Webmarks",
            aim: "AIM Share",
            amazonwishlist: "Amazon",
            aolmail: "AOL Mail",
            aviary: "Aviary Capture",
            box: "Box.net",
            cosmiq: "COSMiQ",
            domaintoolswhois: "Whois Lookup",
            googlereader: "Google Reader",
            googletranslate: "Google Translate",
            kirtsy: "kIRTSY",
            linkagogo: "Link-a-Gogo",
            meneame: "Men&eacute;ame",
            misterwong: "Mister Wong",
            mailto: "Email App",
            myaol: "myAOL",
            myspace: "MySpace",
            readitlater: "Read It Later",
            stumbleupon: "StumbleUpon",
            typepad: "TypePad",
            wordpress: "WordPress",
            yahoobkm: "Y! Bookmarks",
            yahoomail: "Y! Mail"
        },
            i = document,
            f = i.gn("body").item(0),
            h = _ate.util.bind,
            c = _ate.ed,
            b = function (d, n) {
                var o;
                if (window._atw && _atw.list) {
                    o = _atw.list[d]
                } else {
                    if (g[d]) {
                        o = g[d]
                    } else {
                        o = (n ? d : (d.substr(0, 1).toUpperCase() + d.substr(1)))
                    }
                }
                return o.replace(/&nbsp;/g, " ")
            },
            l = function (d, w, u, t, v) {
                w = w.toUpperCase();
                var r = (d == f && addthis.cache[w] ? addthis.cache[w] : (d || f || i.body).getElementsByTagName(w)),
                    q = [],
                    s, p;
                if (d == f) {
                    addthis.cache[w] = r
                }
                if (v) {
                    for (s = 0; s < r.length; s++) {
                        p = r[s];
                        if (p.className.indexOf(u) > -1) {
                            q.push(p)
                        }
                    }
                } else {
                    u = u.replace(/\-/g, "\\-");
                    var n = new RegExp("(^|\\s)" + u + (t ? "\\w*" : "") + "(\\s|$)");
                    for (s = 0; s < r.length; s++) {
                        p = r[s];
                        if (n.test(p.className)) {
                            q.push(p)
                        }
                    }
                }
                return (q)
            },
            m = i.getElementsByClassname || l;

        function k(d) {
            if (typeof d == "string") {
                var n = d.substr(0, 1);
                if (n == "#") {
                    d = i.getElementById(d.substr(1))
                } else {
                    if (n == ".") {
                        d = m(f, "*", d.substr(1))
                    } else {}
                }
            } if (!d) {
                d = []
            } else {
                if (!(d instanceof Array)) {
                    d = [d]
                }
            }
            return d
        }
        function a(n, d) {
            return function () {
                addthis.plo.push({
                    call: n,
                    args: arguments,
                    ns: d
                })
            }
        }
        function j(o) {
            var n = this,
                d = this.queue = [];
            this.name = o;
            this.call = function () {
                d.push(arguments)
            };
            this.call.queuer = this;
            this.flush = function (r, q) {
                for (var p = 0; p < d.length; p++) {
                    r.apply(q || n, d[p])
                }
                return r
            }
        }
        return {
            ost: 0,
            cache: {},
            plo: [],
            links: [],
            ems: [],
            _Queuer: j,
            _queueFor: a,
            _select: k,
            _gebcn: l,
            button: a("button"),
            toolbox: a("toolbox"),
            update: a("update"),
            util: {
                getServiceName: b
            },
            addEventListener: h(_ate.ed.addEventListener, _ate.ed),
            removeEventListener: h(_ate.ed.removeEventListener, _ate.ed)
        }
    })()
}
_adr.append((function () {
    if (!window.addthis.ost) {
        _ate.extend(addthis, _ate.api);
        var d = document,
            u = undefined,
            w = window,
            unaccent = function (s) {
                if (s.indexOf("&") > -1) {
                    s = s.replace(/&([aeiou]).+;/g, "$1")
                }
                return s
            },
            customServices = {},
            globalConfig = w.addthis_config,
            globalShare = w.addthis_share,
            upConfig = {},
            upShare = {},
            body = d.gn("body").item(0),
            mrg = function (o, n) {
                if (n && o !== n) {
                    for (var k in n) {
                        if (o[k] === u) {
                            o[k] = n[k]
                        }
                    }
                }
            },
            addevts = function (o, ss, au) {
                var oldclick = o.onclick ||
                function () {},
                    genshare = function () {
                        _ate.ed.fire("addthis.menu.share", window.addthis || {}, {
                            service: ss
                        })
                    };
                if (o.conf.data_ga_tracker || addthis_config.data_ga_tracker || o.conf.data_ga_property || addthis_config.data_ga_property) {
                    o.onclick = function () {
                        _ate.gat(ss, au, o.conf, o.share);
                        genshare();
                        oldclick()
                    }
                } else {
                    o.onclick = function () {
                        genshare();
                        oldclick()
                    }
                }
            },
            rpl = function (o, n) {
                var r = {};
                for (var k in o) {
                    if (n[k]) {
                        r[k] = n[k]
                    } else {
                        r[k] = o[k]
                    }
                }
                return r
            },
            addthis = window.addthis,
            genieu = function (share) {
                return "mailto:?subject=" + _euc(share.title ? share.title : "%20") + "&body=" + _euc(share.title ? share.title : "") + (share.title ? "%0D%0A" : "") + _euc(share.url) + "%0D%0A%0D%0AShared via AddThis.com"
            },
            b_title = {
                email: "Email",
                mailto: "Email",
                print: "Print",
                favorites: "Save to Favorites",
                twitter: "Tweet This",
                digg: "Digg This"
            },
            json = {
                email_vars: 1,
                templates: 1,
                services_custom: 1
            },
            nosend = {
                more: 1,
                email: 1,
                mailto: 1
            },
            nowindow = {
                email: 1,
                mailto: 1,
                print: 1,
                more: 1,
                favorites: 1
            },
            a_config = ["username", "services_custom", "services_custom_name", "services_custom_url", "services_custom_title", "services_exclude", "services_compact", "services_expanded", "ui_click", "ui_hide_embed", "ui_delay", "ui_hover_direction", "ui_language", "ui_offset_top", "ui_offset_left", "ui_header_color", "ui_header_background", "ui_use_embeddable_services_beta", "ui_icons", "ui_cobrand", "data_use_cookies", "data_track_clickback", "data_track_linkback"],
            a_share = ["url", "title", "templates", "email_template", "email_vars", "html", "swfurl", "width", "height", "screenshot", "author", "description", "content"],
            _svcurl = function (config, share) {
                var sv = config.services instanceof Array ? config.services[0] : config.services || "";
                return "http://" + _atd + "bookmark.php?v=" + _atc.ver + "&pub=" + _euc(_ate.pub()) + "&s=" + sv + (share.url ? "&url=" + _euc(share.url) : "") + (share.title ? "&title=" + _euc(share.title) : "") + "&tt=0"
            },
            _parseAttributes = function (el, attrs, overrides, childWins) {
                var rv = {};
                overrides = overrides || {};
                for (var i = 0; i < attrs.length; i++) {
                    if (overrides[attrs[i]] && !childWins) {
                        rv[attrs[i]] = overrides[attrs[i]]
                    } else {
                        if (el) {
                            var p = "addthis:" + attrs[i],
                                v = el.getAttribute ? el.getAttribute(p) || el[p] : el[p];
                            if (v) {
                                rv[attrs[i]] = v
                            } else {
                                if (overrides[attrs[i]]) {
                                    rv[attrs[i]] = overrides[attrs[i]]
                                }
                            }
                            if (rv[attrs[i]] === "true") {
                                rv[attrs[i]] = true
                            } else {
                                if (rv[attrs[i]] === "false") {
                                    rv[attrs[i]] = false
                                }
                            }
                        }
                    }
                    if (rv[attrs[i]] !== undefined && json[attrs[i]] && (typeof rv[attrs[i]] == "string")) {
                        eval("var e = " + rv[attrs[i]]);
                        rv[attrs[i]] = e
                    }
                }
                return rv
            },
            _processCustomServices = function (conf) {
                var acs = (conf || {}).services_custom;
                if (!acs) {
                    return
                }
                if (!(acs instanceof Array)) {
                    acs = [acs]
                }
                for (var i = 0; i < acs.length; i++) {
                    var service = acs[i];
                    if (service.name && service.icon && service.url) {
                        service.code = service.url = service.url.replace(/ /g, "");
                        if (service.code.indexOf("http") === 0) {
                            service.code = service.code.substr((service.code.indexOf("https") === 0 ? 8 : 7))
                        }
                        service.code = service.code.split("?").shift().split("/").shift().toLowerCase();
                        customServices[service.code] = service
                    }
                }
            },
            _select = addthis._select,
            _getCustomService = function (ss, conf) {
                return customServices[ss] || {}
            },
            _getATtributes = function (el, config, share, childWins) {
                var rv = {
                    conf: config || {},
                    share: share || {}
                };
                rv.conf = _parseAttributes(el, a_config, config, childWins);
                rv.share = _parseAttributes(el, a_share, share, childWins);
                return rv
            },
            _render = function (what, conf, attrs) {
                _ate.igv();
                if (what) {
                    conf = conf || {};
                    attrs = attrs || {};
                    var config = conf.conf || globalConfig,
                        share = conf.share || globalShare;
                    var onmouseover = attrs.onmouseover,
                        onmouseout = attrs.onmouseout,
                        onclick = attrs.onclick,
                        internal = attrs.internal,
                        ss = attrs.singleservice;
                    if (ss) {
                        config.product = "tbx-" + _atc.ver;
                        if (onclick === u) {
                            onclick = nosend[ss] ?
                            function (el, config, share) {
                                var s = rpl(share, upShare);
                                return addthis_open(el, ss, s.url, s.title, rpl(config, upConfig), s)
                            } : nowindow[ss] ?
                            function (el, config, share) {
                                var s = rpl(share, upShare);
                                return addthis_sendto(ss, rpl(config, upConfig), s)
                            } : null
                        }
                    } else {
                        if (!attrs.noevents) {
                            if (!attrs.nohover) {
                                if (onmouseover === u) {
                                    onmouseover = function (el, config, share) {
                                        return addthis_open(el, "", null, null, config, share)
                                    }
                                }
                                if (onmouseout === u) {
                                    onmouseout = function (el) {
                                        return addthis_close()
                                    }
                                }
                                if (onclick === u) {
                                    onclick = function (el, config, share) {
                                        return addthis_sendto("more", config, share)
                                    }
                                }
                            } else {
                                if (onclick === u) {
                                    onclick = function (el, config, share) {
                                        return addthis_open(el, "more", null, null, config, share)
                                    }
                                }
                            }
                        }
                    }
                    what = _select(what);
                    for (var i = 0; i < what.length; i++) {
                        var o = what[i],
                            oattr = _getATtributes(o, config, share, true) || {};
                        mrg(oattr.conf, globalConfig);
                        mrg(oattr.share, globalShare);
                        o.conf = oattr.conf;
                        o.share = oattr.share;
                        if (o.conf.ui_language) {
                            _ate.alg(o.conf.ui_language)
                        }
                        _processCustomServices(o.conf);
                        if ((!o.conf || !o.conf.ui_click) && !_ate.bro.ipa) {
                            if (onmouseover) {
                                o.onmouseover = function () {
                                    return onmouseover(this, this.conf, this.share)
                                }
                            }
                            if (onmouseout) {
                                o.onmouseout = function () {
                                    return onmouseout(this)
                                }
                            }
                            if (onclick) {
                                o.onclick = function () {
                                    return onclick(this, this.conf, this.share)
                                }
                            }
                        } else {
                            if (onclick) {
                                o.onclick = function () {
                                    return addthis_open(this, ss ? ss : "", null, null, this.conf, this.share)
                                }
                            }
                        }
                        if (o.tagName.toLowerCase() == "a") {
                            if (ss) {
                                var customService = _getCustomService(ss, o.conf);
                                o.conf.product = "tbx-" + _atc.ver;
                                if (customService && customService.code && customService.icon) {
                                    if (o.firstChild && o.firstChild.className.indexOf("at300bs") > -1) {
                                        o.firstChild.style.background = "url(" + customService.icon + ") no-repeat top left"
                                    }
                                }
                                if (!nowindow[ss]) {
                                    var t = _ate.trim,
                                        template = o.share.templates && o.share.templates[ss] ? o.share.templates[ss] : "",
                                        url = o.share.url || addthis_share.url,
                                        title = o.share.title || addthis_share.title,
                                        swfurl = o.share.swfurl || addthis_share.swfurl,
                                        width = o.share.width || addthis_share.width,
                                        height = o.share.height || addthis_share.height,
                                        description = o.share.description || addthis_share.description,
                                        screenshot = o.share.screenshot || addthis_share.screenshot;
                                    o.href = "//" + _atd + "bookmark.php?pub=" + t(addthis_config.username || o.conf.username || _ate.pub(), 1) + "&v=" + _atc.ver + "&source=tbx-" + _atc.ver + "&tt=0&s=" + ss + "&url=" + _euc(url || "") + "&title=" + t(title || "", 1) + "&content=" + t(o.share.content || addthis_share.content || "", 1) + (template ? "&template=" + _euc(template) : "") + (o.conf.data_track_clickback || o.conf.data_track_linkback ? "&sms_ss=1" : "") + "&lng=" + (o.conf.ui_language || _ate.lng() || "xy").split("-").shift() + (description ? "&description=" + t(description, 1) : "") + (swfurl ? "&swfurl=" + _euc(swfurl) : "") + (attrs.issh ? "&ips=1" : "") + (width ? "&width=" + _euc(width) : "") + (height ? "&height=" + _euc(height) : "") + (screenshot ? "&screenshot=" + _euc(screenshot) : "") + (customService && customService.url ? "&acn=" + _euc(customService.name) + "&acc=" + _euc(customService.code) + "&acu=" + _euc(customService.url) : "") + (_ate.uid ? "&uid=" + _euc(_ate.uid) : "");
                                    addevts(o, ss, url);
                                    o.target = "_blank";
                                    addthis.links.push(o)
                                } else {
                                    if (ss == "mailto" || (ss == "email" && (o.conf.ui_use_mailto || _ate.bro.iph || _ate.bro.ipa))) {
                                        o.onclick = function () {};
                                        o.href = genieu(o.share);
                                        addevts(o, ss, url);
                                        addthis.ems.push(o)
                                    }
                                }
                                if (!o.title || o.at_titled) {
                                    o.title = unaccent(b_title[ss] ? b_title[ss] : "Send to " + addthis.util.getServiceName(ss, !customService));
                                    o.at_titled = 1
                                }
                            }
                        }
                        if (internal) {
                            var app = internal;
                            if (!o.hasChildNodes()) {
                                if (internal == "img") {
                                    var img = d.ce("img"),
                                        lang = _ate.lng().split("-").shift(),
                                        validatedLang = _ate.ivl(lang);
                                    if (!validatedLang) {
                                        lang = "en"
                                    } else {
                                        if (validatedLang !== 1) {
                                            lang = validatedLang
                                        }
                                    }
                                    img.width = _ate.iwb(lang) ? 150 : 125;
                                    img.height = 16;
                                    img.border = 0;
                                    img.alt = "Share";
                                    img.src = _atr + "static/btn/v2/lg-share-" + lang.substr(0, 2) + ".gif";
                                    app = img
                                }
                                o.appendChild(app)
                            }
                        }
                    }
                }
            },
            buttons = addthis._gebcn(body, "A", "addthis_button_", true, true),
            _renderToolbox = function (collection, config, share, reprocess) {
                for (var i = 0; i < collection.length; i++) {
                    var b = collection[i];
                    if (b == null) {
                        continue
                    }
                    if (reprocess !== false || !b.ost) {
                        var config = config || globalConfig,
                            share = share || globalShare,
                            attr = _getATtributes(b, config, share, true),
                            hc = 0,
                            a = "at300",
                            c = b.className || "",
                            s = c.match(/addthis_button_([\w\.]+)(?:\s|$)/),
                            options = u,
                            sv = s && s.length ? s[1] : 0;
                        if (sv) {
                            if (sv === "facebook_like") {
                                var fblike;
                                if (!_ate.bro.msi) {
                                    fblike = d.ce("iframe")
                                } else {
                                    b.innerHTML = '<iframe frameborder="0" scrolling="no" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                                    fblike = b.firstChild
                                }
                                fblike.style.overflow = "hidden";
                                fblike.style.border = "none";
                                fblike.style.borderWidth = "0px";
                                fblike.style.width = "82px";
                                fblike.style.height = "25px";
                                fblike.style.marginTop = "-2px";
                                fblike.src = "//www.facebook.com/plugins/like.php?href=" + _euc(share.url || addthis_share.url) + "&layout=button_count&show_faces=false&width=100&action=like&font=arial&colorscheme=light";
                                if (!_ate.bro.msi) {
                                    b.appendChild(fblike)
                                }
                            } else {
                                if (sv.indexOf("preferred") > -1) {
                                    window.addthis_product = "tbx-" + _atc.ver;
                                    s = c.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);
                                    var svidx = ((s && s.length) ? Math.min(12, Math.max(1, parseInt(s[1]))) : 1) - 1;
                                    if (window._atw) {
                                        var excl = _atw.conf.services_exclude,
                                            locopts = _atw.loc,
                                            opts = addthis_options.replace(",more", "").split(",");
                                        if (svidx < opts.length) {
                                            sv = opts[svidx];
                                            locopts = locopts.replace(sv, "").replace(",,", "").replace(/,$|^,/, "")
                                        } else {
                                            if (typeof locopts != "array") {
                                                locopts = locopts.split(",")
                                            }
                                            do {
                                                if (svidx < locopts.length) {
                                                    sv = locopts[svidx]
                                                } else {
                                                    break
                                                }
                                            } while (excl.indexOf(svidx++) == -1)
                                        }
                                        b._ips = 1;
                                        if (b.className.indexOf(sv) == -1) {
                                            b.className += " addthis_button_" + sv
                                        }
                                    } else {
                                        if (config.ui_language || window.addthis_language) {
                                            _ate.alg(config.ui_language)
                                        }
                                        _ate.plo.push(["deco", _renderToolbox, [b], config, share, true]);
                                        if (_ate.gssh) {
                                            _ate.pld = _ate.ajs("static/r07/menu52.js")
                                        } else {
                                            if (!_ate.pld) {
                                                _ate.pld = 1;
                                                var loadmenu = function () {
                                                    _ate.pld = _ate.ajs("static/r07/menu52.js")
                                                };
                                                if (_ate.upm) {
                                                    _ate._rec.push(function (data) {
                                                        if (data.ssh) {
                                                            loadmenu()
                                                        }
                                                    });
                                                    _ate.sto(loadmenu, 500)
                                                } else {
                                                    loadmenu()
                                                }
                                            }
                                        }
                                        continue
                                    }
                                }
                            }
                            if (!b.childNodes.length) {
                                var sp = d.ce("span");
                                b.appendChild(sp);
                                sp.className = a + "bs at15t_" + sv
                            } else {
                                if (b.childNodes.length == 1) {
                                    var cn = b.childNodes[0];
                                    if (cn.nodeType == 3) {
                                        var sp = d.ce("span"),
                                            tv = cn.nodeValue;
                                        b.insertBefore(sp, cn);
                                        sp.className = a + "bs at15t_" + sv
                                    }
                                } else {
                                    hc = 1
                                }
                            }
                            if (sv === "compact") {
                                if (!hc && c.indexOf(a) == -1) {
                                    b.className += " " + a + "m"
                                }
                            } else {
                                if (sv === "expanded") {
                                    if (!hc && c.indexOf(a) == -1) {
                                        b.className += " " + a + "m"
                                    }
                                    options = {
                                        nohover: true,
                                        singleservice: "more"
                                    }
                                } else {
                                    if (!hc && c.indexOf(a) == -1) {
                                        b.className += " " + a + "b"
                                    }
                                    options = {
                                        singleservice: sv
                                    }
                                }
                            }
                            if (b._ips) {
                                if (!options) {
                                    options = {}
                                }
                                options.issh = true
                            }
                            _render([b], attr, options);
                            b.ost = 1;
                            window.addthis_product = "tbx-" + _atc.ver
                        }
                    }
                }
            },
            gat = function (s, au, conf, share) {
                var pageTracker = conf.data_ga_tracker,
                    propertyId = conf.data_ga_property;
                if (propertyId && typeof(window._gat) == "object") {
                    pageTracker = _gat._getTracker(propertyId)
                }
                if (pageTracker && typeof(pageTracker) == "string") {
                    pageTracker = window[pageTracker]
                }
                if (pageTracker && typeof(pageTracker) == "object") {
                    var gaUrl = au || (share || {}).url || location.href;
                    if (gaUrl.toLowerCase().replace("https", "http").indexOf("http%3a%2f%2f") == 0) {
                        gaUrl = _duc(gaUrl)
                    }
                    try {
                        pageTracker._trackEvent("addthis", s, gaUrl)
                    } catch (e) {
                        try {
                            pageTracker._initData();
                            pageTracker._trackEvent("addthis", s, gaUrl)
                        } catch (e) {}
                    }
                }
            };
        _ate.gat = gat;
        addthis.update = function (which, what, value) {
            if (which == "share") {
                if (!window.addthis_share) {
                    window.addthis_share = {}
                }
                window.addthis_share[what] = value;
                upShare[what] = value;
                for (var i in addthis.links) {
                    var o = addthis.links[i],
                        rx = new RegExp("&" + what + "=(.*)&"),
                        ns = "&" + what + "=" + _euc(value) + "&";
                    o.href = o.href.replace(rx, ns);
                    if (o.href.indexOf(what) == -1) {
                        o.href += ns
                    }
                }
                for (var i in addthis.ems) {
                    var o = addthis.ems[i];
                    o.href = genieu(addthis_share)
                }
            } else {
                if (which == "config") {
                    if (!window.addthis_config) {
                        window.addthis_config = {}
                    }
                    window.addthis_config[what] = value;
                    upConfig[what] = value
                }
            }
        };
        addthis._render = _render;
        addthis.button = function (what, config, share) {
            _render(what, {
                conf: config,
                share: share
            }, {
                internal: "img"
            })
        };
        addthis.toolbox = function (what, config, share) {
            var toolboxes = _select(what);
            for (var i = 0; i < toolboxes.length; i++) {
                var tb = toolboxes[i],
                    attr = _getATtributes(tb, config, share),
                    sp = d.ce("div"),
                    c;
                if (tb) {
                    c = tb.getElementsByTagName("a");
                    if (c) {
                        _renderToolbox(c, attr.conf, attr.share)
                    }
                    tb.appendChild(sp)
                }
                sp.className = "atclear"
            }
        };
        addthis.ready = function () {
            var at = addthis,
                a = ".addthis_";
            if (at.ost) {
                return
            }
            at.ost = 1;
            addthis.toolbox(a + "toolbox");
            addthis.button(a + "button");
            _renderToolbox(buttons, null, null, false);
            _ate.ed.fire("addthis.ready", addthis);
            for (var i = 0, plo = at.plo, q; i < plo.length; i++) {
                q = plo[i];
                (q.ns ? at[q.ns] : at)[q.call].apply(this, q.args)
            }
        };
        window.addthis = addthis;
        window.addthis.ready()
    }
}));
_ate.extend(addthis, {
    user: (function () {
        var f = _ate,
            c = addthis,
            g = {},
            d = 0,
            j;

        function i(a, k) {
            return f.reduce(["getID", "getServiceShareHistory"], a, k)
        }
        function h(a, k) {
            return function (l) {
                setTimeout(function () {
                    l(f[a] || k)
                }, 0)
            }
        }
        function b() {
            if (d) {
                return
            }
            if (j !== null) {
                clearTimeout(j)
            }
            j = null;
            d = 1;
            i(function (l, a, k) {
                g[a] = g[a].queuer.flush(h.apply(c, l[k]), c);
                return l
            }, [
                ["uid", ""],
                ["_ssh", []]
            ])
        }
        f._rec.push(b);
        j = setTimeout(b, 5000);
        g.getPreferredServices = function (a) {
            if (window._atw) {
                a(addthis_options.split(","))
            } else {
                f.plo.push(["pref", a]);
                _ate.alg();
                if (f.gssh) {
                    f.pld = f.ajs("static/r07/menu52.js")
                } else {
                    if (!f.pld) {
                        f.pld = 1;
                        f.sto("_ate.pld = _ate.ajs('static/r07/menu52.js');", 100)
                    }
                }
            }
        };
        return i(function (k, a) {
            k[a] = (new c._Queuer(a)).call;
            return k
        }, g)
    })()
});
sakai.api.Widgets.widgetLoader.informOnLoad("bookmarkandshare");