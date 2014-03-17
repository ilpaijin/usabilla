(function() {
    if (window.parent != window && !window.lightningjs) {
        var f = window,
            h = window.parent.lightningjs,
            d = f.lightningjs = {
                modules: h.modules
            }, n = h.modules;
        d.expensive = function(b) {
            b._waitforload = !0;
            return b
        };
        void 0;
        d.require = h.require;
        d.provide = function(b, k) {
            function l() {
                var a = f.console;
                if (a && a.error) try {
                    a.error.apply(a, arguments)
                } catch (c) {} else if (f.opera) try {
                    f.opera.postError.apply(f.opera, arguments)
                } catch (i) {}
            }

            function h(a) {
                var c = a[0],
                    i = a[1],
                    b = 0 < i ? o[i] : k,
                    g = Array.prototype.slice.call(a[2]),
                    f = g.shift(),
                    a = e._.fh[c] = e._.fh[c] || [],
                    i = e._.eh[c] = e._.eh[c] || [];
                e._.ph[c] = e._.ph[c] || [];
                var d, j;
                if (b) {
                    if (b = b[f]) try {
                        d = b.apply(b, g)
                    } catch (m) {
                        j = m
                    } else j = Error("unknown deferred method '" + f + "'"), l(j.toString());
                    d && (o[c] = d);
                    if (j) {
                        for (; i.length;) {
                            c = i.shift();
                            try {
                                c(j)
                            } catch (n) {
                                l(n)
                            }
                        }
                        i.push = function(a) {
                            a(j)
                        }
                    } else {
                        for (; a.length;) {
                            c = a.shift();
                            try {
                                c(d)
                            } catch (p) {
                                l(p)
                            }
                        }
                        a.push = function(a) {
                            a(d)
                        }
                    }
                } else l("cannot call deferred method '" + f + "' on 'undefined'")
            }

            function p() {
                for (var a = g.shift(); a;) {
                    var c;
                    if (q) c = !1;
                    else {
                        var b = a[1];
                        c = 0 < b ? o[b] : k;
                        var d = Array.prototype.slice.call(a[2]).shift(),
                            e = void 0,
                            b = r[b] ? !0 : !1;
                        c = c ? (e = c[d]) ? e._waitforload ? !0 : !1 : !1 : b ? !0 : !1
                    }
                    c ? (r[a[0]] = !0, m.push(a)) : h(a);
                    a = g.shift()
                }
            }
            d.require(b);
            var e = n[b];
            if (e.provided) l("deferred module '" + b + "' is already defined");
            else {
                e.provided = !0;
                var g = (e._.s || []).slice(),
                    o = {
                        "0": k
                    }, m = [],
                    r = {}, q = !1;
                g && g[0] && (o[g[0][1]] = k);
                k._load = function() {
                    q = !0;
                    for (var a = m.shift(); a;) h(a), a = m.shift()
                };
                e._.s = {
                    push: function(a) {
                        g.push(a);
                        p()
                    }
                };
                p()
            }
        };
        n.lightningjs.provided || d.provide("lightningjs", {
            load: function() {
                var b = h.modules,
                    d, f;
                for (f in b) d = b[f], d._ && d("_load")
            }
        })
    }
})();

(function() {
    var d = window.parent.document;

    function e(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    }
    window.usabilla_live = window.usabilla_live || {};
    window.usabilla_live.onEvent = e;
    window.usabilla_live.stopEvent = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    };
    window.usabilla_live.triggerEvent = function(a, b) {
        if (d.createEventObject) a.fireEvent("on" + b, d.createEventObject());
        else {
            var c = d.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        }
    };
    window.usabilla_live.onParentLoad = function(a) {
        "complete" == window.parent.document.readyState ? setTimeout(a, 0) : e(window.parent, "load", a)
    };
})();

(function() {
    (function() {
        var Q, R, C, S, T, H, u, p, q, w, r, l, j, M, g, k, x, N, s, f, h, D, y, U, z, I, t, m, V, W, X, A = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            }, Y = {}.hasOwnProperty,
            J = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var e in b) Y.call(b, e) && (a[e] = b[e]);
                c.prototype = b.prototype;
                a.prototype = new c;
                a.__super__ = b.prototype;
                return a
            }, O = [].indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        h = window.parent;
        f = h.document;
        C = "https:";
        "https:" !== f.location.protocol &&
            (C = "http:");
        g = {
            _messages: [],
            _ts: (new Date).getTime(),
            log: function(a, b) {
                var c, e;
                null == b && (b = null);
                c = null;
                try {
                    c = JSON.parse(JSON.stringify(b))
                } catch (i) {}
                e = (new Date).getTime();
                return g._messages.push([e - g._ts, a, c])
            },
            getMessages: function() {
                return g._messages
            }
        };
        h = window.parent;
        f = h.document;
        C = "https:";
        "https:" !== f.location.protocol && (C = "http:");
        q = {};
        var E;
        E = function(a, b) {
            var c;
            c = "" + C + "//w.usabilla.com/a/t?m=c&b=" + encodeURIComponent("8a67b1361ee1") + "&c=" + encodeURIComponent(a) + "&e=" + encodeURIComponent(b) +
                "&cb=" + (new Date).getTime();
            return (new Image(1, 1)).src = c
        };
        q.hit = function(a) {
            return E(a, "a")
        };
        q.click = function(a) {
            return E(a, "c")
        };
        q.success = function(a) {
            return E(a, "s")
        };
        q.fail = function(a) {
            return E(a, "f")
        };
        h = window.parent;
        f = h.document;
        m = {};
        t = 0;
        var d = function(a, b, c) {
            var e, i, d, f = this;
            this.callback = c;
            this.id = t++;
            i = RegExp(a.regexp, "i");
            e = this.get(a);
            g.log("createUrlTrigger(" + this.id + ")", a);
            i.test(e()) ? (g.log("UrlTriggerMatch()", {
                spec: a,
                url: e()
            }), this.triggered = function() {
                return !0
            }) : (this.triggered = function() {
                    return !1
                },
                d = setInterval(function() {
                    var b;
                    b = e();
                    if (i.test(b)) return g.log("UrlTriggerMatch(" + f.id + ")", {
                        spec: a,
                        time: !0,
                        url: b
                    }), f.triggered = function() {
                        return !0
                    }, f.callback(), clearInterval(d)
                }, 1E3))
        };
        d.prototype.get = function(a) {
            var b;
            b = {
                href: function(a) {
                    return function() {
                        var b, i;
                        b = (null != f ? null != (i = f.location) ? i.href : void 0 : void 0) || "";
                        return a || -1 === b.indexOf("?") ? b : b.substring(0, b.indexOf("?"))
                    }
                },
                pathname: function(a) {
                    return !a ? function() {
                        var a;
                        return (null != (a = f.location) ? a.pathname : void 0) || ""
                    } : function() {
                        var a;
                        return ((null != (a = f.location) ? a.pathname : void 0) || "") + (f.location.search || "")
                    }
                }
            };
            return null == b[a.match] ? function() {
                return ""
            } : b[a.match](a.query || !1)
        };
        d.prototype.destroy = function() {};
        m.url = d;
        d = function(a, b, c) {
            var e = this;
            this.callback = c;
            this.id = t++;
            g.log("createDelayTrigger(" + this.id + ")", a);
            this.triggered = function() {
                return !1
            };
            this.timer = setTimeout(function() {
                g.log("DelayTriggerFire(" + e.id + ")");
                e.timer = null;
                e.triggered = function() {
                    return !0
                };
                return e.callback()
            }, a.time)
        };
        d.prototype.destroy = function() {
            if (this.timer) return clearTimeout(this.timer)
        };
        m.delay = d;
        m.percentage = function(a, b, c) {
            var e, i;
            this.data = b;
            this.callback = c;
            this.id = t++;
            g.log("createChanceTrigger(" + this.id + ")", a);
            b = "function" === typeof(e = this.data).chanceHit ? e.chanceHit() : void 0;
            null === b && (b = Math.random() <= a.percentage / 100, "function" === typeof(i = this.data).chanceHit && i.chanceHit(b));
            this.triggered = b ? function() {
                return true
            } : function() {
                return false
            };
            g.log("chanceTrigger(" + this.id + ")", this.triggered())
        };
        d = function(a, b, c) {
            this.callback = c;
            this.id = t++;
            g.log("createVisitorTrigger(" + this.id +
                ")", a);
            D.initialize();
            this.t = !1;
            "new" === a.state && D.isNew() && (this.t = !0);
            "returning" === a.state && D.isReturning() && (this.t = !0);
            g.log("VisitorTrigger(" + this.id + ")", this.t)
        };
        d.prototype.triggered = function() {
            return this.t
        };
        m.visitor = d;
        d = function(a, b, c) {
            this.callback = c;
            this.onScroll = A(this.onScroll, this);
            this.id = t++;
            g.log("createScrollTrigger(" + this.id + ")", a);
            this.margin = a.margin || 200;
            this.t = !1;
            window.usabilla_live.onEvent(h, "scroll", this.onScroll)
        };
        d.prototype.onScroll = function() {
            var a, b;
            a = h.pageYOffset ||
                f.body.scrollTop || f.documentElement.scrollTop || 0;
            b = h.innerHeight || f.documentElement.clientHeight || f.body.clientHeight || 0;
            if (Math.max(f.body.scrollHeight || 0, f.documentElement.scrollHeight || 0, f.body.offsetHeight || 0, f.documentElement.offsetHeight || 0, f.body.clientHeight || 0, f.documentElement.clientHeight || 0) - (a + b) <= this.margin) return g.log("scrollTriggerFire(" + this.id + ")", a), this.t = !0, this.callback(), this.destroy()
        };
        d.prototype.triggered = function() {
            return this.t
        };
        d.prototype.destroy = function() {
            return window.usabilla_live.stopEvent(h,
                "scroll", this.onScroll)
        };
        m.scroll = d;
        m.pages = function(a, b, c) {
            this.callback = c;
            this.id = t++;
            g.log("createPagesTrigger(" + this.id + ")", a);
            c = (("function" === typeof b.pageVisitCount ? b.pageVisitCount() : void 0) || 0) + 1;
            b.pageVisitCount(c);
            c >= a.pages ? (g.log("pagesTriggerFire(" + this.id + ")", a), this.triggered = function() {
                return !0
            }) : this.triggered = function() {
                return !1
            }
        };
        d = function(a, b, c) {
            var e, i = this;
            this.callback = c;
            this.mouseOut = A(this.mouseOut, this);
            this.id = t++;
            g.log("createMouseOutTrigger(" + this.id + ")", a);
            this.triggered =
                function() {
                    return !1
            };
            a = a.time || 1E4;
            e = h;
            window.attachEvent && (e = f);
            setTimeout(function() {
                return window.usabilla_live.onEvent(e, "mouseout", i.mouseOut)
            }, a)
        };
        d.prototype.mouseOut = function(a) {
            a = a || h.event;
            a = a.relatedTarget || a.toElement;
            if (null === a || "undefined" === typeof a) return g.log("mouseOutTriggerFire(" + this.id + ")"), this.triggered = function() {
                return !0
            }, this.callback(), this.destroy()
        };
        d.prototype.destroy = function() {
            var a;
            a = h;
            window.attachEvent && (a = f);
            return window.usabilla_live.stopEvent(a, "mouseout",
                this.mouseOut)
        };
        m.mouseout = d;
        r = {};
        d = function(a, b, c) {
            this.callback = c;
            this.id = t++;
            g.log("createCustomTrigger(" + this.id + ")", a);
            this.name = a.name;
            this._triggered = !1;
            this.name in r || (r[this.name] = {
                triggered: !1,
                list: []
            });
            r[this.name].triggered && (g.log("customTriggerFire(" + this.id + ")", a), this._triggered = !0);
            r[this.name].list.push(this)
        };
        d.prototype.triggered = function() {
            return this._triggered
        };
        d.prototype.trigger = function() {
            g.log("customTriggerFire(" + this.id + ")");
            this._triggered = !0;
            return this.callback()
        };
        m.custom = d;
        d = function(a, b, c) {
            var e = this;
            this.spec = a;
            this.callback = c;
            this._triggered = !1;
            this.t = setInterval(function() {
                return e.checkValues()
            }, 1E3);
            this.checkValues()
        };
        d.prototype.checks = {
            equals: function(a, b) {
                return "" + a === "" + b
            },
            nequals: function(a, b) {
                return "" + a !== "" + b
            },
            contains: function(a, b) {
                return RegExp(b, "i").test(a)
            },
            gt: function(a, b) {
                return a > b
            },
            gte: function(a, b) {
                return a >= b
            },
            lt: function(a, b) {
                return a < b
            },
            lte: function(a, b) {
                return a <= b
            },
            oneof: function(a, b) {
                var c, e, i, d;
                d = b.split(",");
                e = 0;
                for (i = d.length; e <
                    i; e++)
                    if (c = d[e], RegExp(c, "i").test(a)) return !0;
                return !1
            }
        };
        d.prototype.checkOp = function(a, b, c) {
            var e, i, d;
            i = 0;
            for (d = b.length; i < d; i++)
                if (e = b[i], this.checks[a](e, c)) return !0;
            return !1
        };
        d.prototype.getDottedVar = function(a, b, c) {
            var e, i, d, b = b.split(".");
            e = a;
            i = 0;
            for (d = b.length; i < d; i++)
                if (a = b[i], a in e) e = e[a];
                else return c;
            return e
        };
        d.prototype.getVars = function(a) {
            var b, c, e, d, f, g, k;
            c = [];
            f = this.spec.vars;
            e = 0;
            for (d = f.length; e < d; e++) b = f[e], b = "*" === b ? (null != (g = window.usabilla_live_settings) ? null != (k = g.local_data) ?
                k.custom : void 0 : void 0) || {} : this.getDottedVar(h, b, {}), b = this.getDottedVar(b, a, null), null !== b && c.push(b);
            return c
        };
        d.prototype.checkValues = function() {
            var a, b, c, e, d, f;
            b = !0;
            f = this.spec.ops;
            e = 0;
            for (d = f.length; e < d; e++) a = f[e], c = this.getVars(a["var"]), b && (b = this.checkOp(a.comp, c, a.val));
            if (b) return clearInterval(this.t), this._triggered = !0, this.callback()
        };
        d.prototype.triggered = function() {
            return this._triggered
        };
        m.jsval = d;
        window.usabilla_live.campaignTrigger = function(a) {
            var b, c, e, d;
            if (a in r) {
                if (!r[a].triggered) {
                    d =
                        r[a].list;
                    c = 0;
                    for (e = d.length; c < e; c++) b = d[c], b.trigger()
                }
                return r[a].triggered = !0
            }
            return r[a] = {
                triggered: !0,
                list: []
            }
        };
        y = function(a, b, c) {
            var e, d, f, g;
            g = ["-webkit-", "-moz-", "-o-", "-ms-"];
            d = 0;
            for (f = g.length; d < f; d++) e = g[d], a.style[e + b] = c.replace("%p%", e);
            return a.style[b] = c.replace("%p%", "")
        };
        h = parent.window;
        f = h.document;
        l = l || {};
        d = function(a, b) {
            this.config = a;
            this.iframe = b;
            this.frameCount = this.configValue(["shakes", "wobbles"], 4);
            this.amplitude = this.configValue(["amp", "amplitude"], 2);
            this.top = this.configValue(["top"],
                1);
            this.bottom = this.configValue(["bottom"], -1);
            this.offset = this.configValue(["offset"], 0);
            this.delay = this.configValue(["delay"], 2E3);
            this.speed = this.configValue(["speed"], 50);
            this.duration = this.configValue(["duration"], 0);
            this.timer = null;
            this.initialize()
        };
        d.prototype.getTags = function() {
            return ["move"]
        };
        d.prototype.configValue = function(a, b) {
            var c, e, d;
            e = 0;
            for (d = a.length; e < d; e++)
                if (c = a[e], c in this.config) return this.config[c];
            return b
        };
        d.prototype.frames = function() {
            var a, b, c, e;
            b = [];
            a = c = 1;
            for (e = this.frameCount; 1 <=
                e ? c <= e : c >= e; a = 1 <= e ? ++c : --c) b.push([this.speed, this.offset + this.amplitude * (a % 2 ? this.top : this.bottom)]);
            b.push([this.speed, this.offset]);
            this.delay && b.push([this.delay, this.offset]);
            return b
        };
        d.prototype.frame = function() {
            return {}
        };
        d.prototype.start = function(a) {
            var b, c, e, d = this;
            null == a && (a = null);
            setTimeout(function() {
                return "function" === typeof a ? a() : void 0
            }, 0);
            if (!this.timer && (e = 0, c = this.frames(), b = function() {
                var a;
                a = c[e];
                return d.timer = setTimeout(function() {
                        d.frame(a[1]);
                        e = (e + 1) % c.length;
                        return b()
                    },
                    a[0])
            }, b(), 0 < this.duration)) return setTimeout(function() {
                return d.stop()
            }, this.duration)
        };
        d.prototype.stop = function(a) {
            null == a && (a = null);
            this.timer && (clearTimeout(this.timer), this.frame(0));
            return setTimeout(function() {
                return typeof a === "function" ? a() : void 0
            }, 0)
        };
        d.prototype.initialize = function() {};
        d.prototype.destroy = function() {
            return this.stop()
        };
        var P = l,
            F = function() {
                return W = F.__super__.constructor.apply(this, arguments)
            };
        J(F, d);
        F.prototype.initialize = function() {
            var a;
            a = this.iframe.getAttribute("data-tags") ||
                "";
            this.css = "left";
            if (a.match(/\b(left|right)\b/)) return this.css = "top"
        };
        F.prototype.frame = function(a) {
            return this.iframe.style[this.css] = "" + a + "px"
        };
        P.shake = F;
        var P = l,
            v = function() {
                return X = v.__super__.constructor.apply(this, arguments)
            };
        J(v, d);
        v.prototype.initialize = function() {
            var a;
            a = this.iframe.getAttribute("data-tags") || "";
            this.origin = "50% 100%";
            a.match(/\bright\b/) && (this.origin = "100% 50%");
            a.match(/\bleft\b/) && (this.origin = "0% 50%");
            a.match(/\btop\b/) && (this.origin = "50% 0%");
            this.transition = this.configValue(["transition"], !0);
            this.type = "skewX";
            a.match(/\b(left|right)\b/) && (this.type = "skewY");
            y(this.iframe, "transform-origin", this.origin);
            if (this.transition) return y(this.iframe, "transition", "%p%transform " + this.speed / 1E3 + "s ease")
        };
        v.prototype.unit = function() {
            var a;
            return "skewX" === (a = this.type) || "skewY" === a || "rotate" === a || "rotateX" === a || "rotateY" === a || "rotateZ" === a ? "deg" : ""
        };
        v.prototype.frame = function(a) {
            return y(this.iframe, "transform", "" + this.type + "(" + a + this.unit() + ")")
        };
        v.prototype.destroy = function() {
            return this.stop(function() {
                y(this.iframe,
                    "transform-origin", null);
                return y(this.iframe, "transition", null)
            })
        };
        P.skew = v;
        h = window.parent;
        f = h.document;
        l = l || {};
        x = window.usabilla_live.onEvent;
        var G = function(a, b, c, e, d) {
            this.obj = a;
            this.property = b;
            this.off = c;
            this.on = e;
            this.defaultSpeed = d;
            this.doAnimation = A(this.doAnimation, this);
            this.callback = this.timer = this.goal = null
        };
        G.prototype.start = function(a, b) {
            null == a && (a = null);
            null == b && (b = this.defaultSpeed);
            return this.animate(b, a, this.off, this.on)
        };
        G.prototype.stop = function(a, b) {
            null == a && (a = null);
            null ==
                b && (b = this.defaultSpeed);
            return this.animate(b, a, this.on, this.off)
        };
        G.prototype.animate = function(a, b, c, e) {
            "function" === typeof this.callback && this.callback(!1);
            this.callback = b;
            this.startVal = b = parseInt(this.obj.style[this.property]);
            this.stopVal = e;
            this.speed = a * (1 - (b - c) / (e - c));
            this.startTime = new Date;
            if (null === this.timer) return this.timer = setInterval(this.doAnimation, 20)
        };
        G.prototype.doAnimation = function() {
            var a;
            a = Math.min(1, (new Date - this.startTime) / this.speed);
            a = (a - 1) * (a - 1) * (a - 1) + 1;
            this.obj.style[this.property] =
                "" + (this.startVal + (this.stopVal - this.startVal) * a) + "px";
            if (1 <= a) return clearInterval(this.timer), this.timer = null, this.obj.style[this.property] = "" + this.stopVal + "px", "function" === typeof this.callback && this.callback(!0), this.callback = null
        };
        d = function(a, b, c) {
            this.config = a;
            this.iframe = b;
            this.campaign = c;
            this.onMessage = A(this.onMessage, this);
            j();
            this.tags = this.iframe.getAttribute("data-tags") || "";
            this.speed = this.config.speed || 1E3;
            this.location = this.config.location + (-1 === this.config.location.indexOf("?") ?
                "?" : "&") + "tags=" + encodeURIComponent(this.tags);
            "https:" !== f.location.protocol && (this.location = this.location.replace(/^https:/, "http:"));
            this.stopOnFeedback = !0;
            this.startQueue = this.positioned = !1;
            this.animation = null;
            this.open = !1;
            this.opened = this.closed = this.property = null;
            this.initialize()
        };
        d.prototype.getTags = function() {
            return ["slideout"]
        };
        d.prototype.initialize = function() {
            var a, b, c, e = this;
            this.msg = f.createElement("iframe");
            b = {
                width: "10px",
                height: "10px",
                visibility: "hidden",
                margin: "0",
                padding: "0",
                border: "0",
                overflow: "hidden",
                zIndex: "9997",
                position: "absolute",
                backgroundColor: "transparent",
                boxShadow: "0 0 0"
            };
            for (a in b) c = b[a], this.msg.style[a] = c;
            this.msg.frameBorder = "0";
            this.msg.marginWidth = "0";
            this.msg.marginHeight = "0";
            this.msg.scrolling = "no";
            this.msg.allowTransparency = !0;
            this.msg.src = this.location;
            x(h, "message", function(a) {
                a = a || window.event;
                if (!(null === e.msg || a.source !== e.msg.contentWindow)) return e.onMessage(a.data)
            });
            return this.iframe.parentNode.appendChild(this.msg)
        };
        d.prototype.customData = function() {
            var a;
            return (null != (a = window.usabilla_live_settings) ? a.local_data : void 0) || {}
        };
        d.prototype.onMessage = function(a) {
            var b, c = this;
            if (b = a.match(/^loaded\|(\d+)\|(\d+)\|(\d+)\|(T|F)/)) this.stopOnFeedback = "T" === b[4], this.positionIframe(parseInt(b[1]), parseInt(b[2]), parseInt(b[3])), this.msg.contentWindow.postMessage(f.location.toString(), "*");
            else {
                if ("sendLogs" === a) return j(function() {
                    c.msg.contentWindow.postMessage("LOGMSGS:" + JSON.stringify(g.getMessages()), "*");
                    return c.msg.contentWindow.postMessage("CUSTOM:" +
                        JSON.stringify(c.customData()), "*")
                });
                if ("close" === a) return this.stop(), this.campaign.stop();
                if ("feedback" === a) return this.stop(), this.campaign.boost = !0, window.usabilla_live.buttonClick();
                if ("success" === a) return this.campaign.success();
                if ("successOnFeedback" === a) return this.campaign.successOnFeedback();
                if ("failure" === a) return this.campaign.failure();
                if ("markAsClicked" === a) return this.campaign.markAsClicked()
            }
        };
        d.prototype.positionIframe = function(a, b, c) {
            this.msg.style.width = "" + a + "px";
            this.msg.style.height =
                "" + b + "px";
            this.tags.match(/\bbottom\b/) ? (this.msg.style.top = "" + (parseInt(this.iframe.style.height) - c) + "px", this.msg.style.left = "" + Math.round((parseInt(this.iframe.style.width) - a) / 2) + "px", this.property = "height", this.closed = parseInt(this.iframe.parentNode.style.height), this.opened = this.closed + b - c) : this.tags.match(/\bright\b/) ? (this.msg.style.top = "" + Math.round((parseInt(this.iframe.style.height) - b) / 2) + "px", this.msg.style.left = "" + (parseInt(this.iframe.style.width) - c) + "px", this.property = "width", this.closed =
                parseInt(this.iframe.parentNode.style.width), this.opened = this.closed + a - c) : this.tags.match(/\bleft\b/) ? (this.msg.style.top = "" + Math.round((parseInt(this.iframe.style.height) - b) / 2) + "px", this.msg.style.left = "-" + (a - 1) + "px", this.property = "left", this.closed = 0, this.opened = a - c) : this.tags.match(/\btop\b/) && (this.msg.style.top = "-" + (b - c) + "px", this.msg.style.left = "" + Math.round((parseInt(this.iframe.style.width) - a) / 2) + "px", this.property = "top", this.closed = 0, this.opened = b - c);
            this.positioned = !0;
            if (this.startQueue) return this.startQueue = !1, this.start()
        };
        d.prototype.start = function() {
            if (!this.open) {
                if (this.positioned) return null === this.animation && (this.animation = new G(this.iframe.parentNode, this.property, this.closed, this.opened, this.speed)), this.msg.style.visibility = "visible", this.open = !0, this.animation.start();
                this.startQueue = !0
            }
        };
        d.prototype.stop = function() {
            var a = this;
            this.startQueue = !1;
            if (this.open && (this.open = !1, null !== this.animation)) return this.animation.stop(function(b) {
                if (b) return a.msg.style.visibility = "hidden"
            })
        };
        d.prototype.destroy =
            function() {
                var a = this;
                if (null !== this.msg) return null !== this.animation && this.animation.stop(function() {
                    a.animation = null;
                    return a.destroy()
                }, 0), this.msg.parentNode.removeChild(this.msg), this.msg = null
        };
        l.slideout = d;
        h = window.parent;
        f = h.document;
        s = null;
        l = l || {};
        x = window.usabilla_live.onEvent;
        d = function(a, b, c) {
            this.config = a;
            this.iframe = b;
            this.campaign = c;
            this.onMessage = A(this.onMessage, this);
            j();
            this.tags = this.iframe.getAttribute("data-tags") || "";
            this.location = this.config.location + (-1 === this.config.location.indexOf("?") ?
                "?" : "&") + "tags=" + encodeURIComponent(this.tags);
            "https:" !== f.location.protocol && (this.location = this.location.replace(/^https:/, "http:"));
            this.touchEvent = this.open = this.startQueue = this.positioned = this.stopOnFeedback = !1;
            s = f.getElementsByTagName("body")[0];
            this.initialize()
        };
        d.prototype.getTags = function() {
            return ["popout", "slideout"]
        };
        d.prototype.initialize = function() {
            var a, b, c, e = this;
            this.container = f.createElement("div");
            b = {
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                backgroundColor: "#555555",
                zIndex: "999999999",
                overflowX: "auto",
                overflowY: "scroll",
                visibility: "hidden",
                marginLeft: "-9999px"
            };
            for (a in b) c = b[a], this.container.style[a] = c;
            try {
                this.container.style.backgroundColor = "rgba(85,85,85,0.8)"
            } catch (d) {
                try {
                    this.container.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#CD555555,endColorstr=#CD555555)", this.container.style.background = "transparent", this.container.style.zoom = "1"
                } catch (g) {}
            }
            this.fullsize = f.createElement("div");
            b = {
                marginTop: "0",
                marginRight: "auto",
                marginLeft: "auto",
                height: "10px"
            };
            for (a in b) c = b[a], this.fullsize.style[a] = c;
            this.msg = f.createElement("iframe");
            b = {
                margin: "0",
                padding: "0",
                border: "0",
                overflow: "hidden",
                zIndex: "999999999"
            };
            for (a in b) c = b[a], this.msg.style[a] = c;
            this.msg.frameBorder = "0";
            this.msg.marginWidth = "0";
            this.msg.marginHeight = "0";
            this.msg.scrolling = "no";
            this.msg.allowTransparency = !0;
            this.msg.width = "100%";
            this.msg.height = "100%";
            this.msg.src = this.location;
            x(f, "touchstart", function() {
                e.touchEvent = !0;
                e.container.style.position = "absolute";
                e.container.style.bottom =
                    "";
                return e.container.style.height = "" + e.docHeight() + "px"
            });
            x(h, "message", function(a) {
                a = a || window.event;
                if (!(null === e.msg || a.source !== e.msg.contentWindow)) return e.onMessage(a.data)
            });
            this.fullsize.appendChild(this.msg);
            this.container.appendChild(this.fullsize);
            return s.appendChild(this.container)
        };
        d.prototype.docHeight = function() {
            return Math.max(s.scrollHeight, f.documentElement.scrollHeight, s.offsetHeight, f.documentElement.offsetHeight, f.documentElement.clientHeight)
        };
        d.prototype.customData = function() {
            var a;
            return (null != (a = window.usabilla_live_settings) ? a.local_data : void 0) || {}
        };
        d.prototype.onMessage = function(a) {
            var b, c = this;
            if (b = a.match(/^loaded\|(\d+)\|(\d+)\|(\d+)\|(T|F)/)) this.stopOnFeedback = "T" === b[4], this.width = parseInt(b[1]), this.height = parseInt(b[2]), this.padding = parseInt(b[3]), this.positionIframe(), this.msg.contentWindow.postMessage(f.location.toString(), "*");
            else {
                if ("sendLogs" === a) return j(function() {
                    c.msg.contentWindow.postMessage("LOGMSGS:" + JSON.stringify(g.getMessages()), "*");
                    return c.msg.contentWindow.postMessage("CUSTOM:" +
                        JSON.stringify(c.customData()), "*")
                });
                if (b = a.match(/^resize\|(\d+)\|(\d+)$/)) return this.width = parseInt(b[1]), this.height = parseInt(b[2]), this.reposition();
                if ("close" === a) return this.stop(), this.campaign.stop();
                if ("feedback" === a) return this.stop(), window.usabilla_live.buttonClick();
                if ("success" === a) return this.campaign.success();
                if ("successOnFeedback" === a) return this.campaign.successOnFeedback();
                if ("failure" === a) return this.campaign.failure();
                if ("markAsClicked" === a) return this.campaign.markAsClicked()
            }
        };
        d.prototype.reposition = function() {
            var a, b, c;
            c = h.innerWidth || f.documentElement.clientWidth || s.clientWidth;
            this.isTouch() && (c = f.documentElement.clientWidth || s.clientWidth || h.innerWidth);
            b = Math.min(600, 0.8 * c);
            this.isTouch() && (b = c);
            a = Math.max(50, this.padding);
            400 > c && (a = 0);
            this.fullsize.style.width = "" + b + "px";
            this.fullsize.style.marginTop = "" + a + "px";
            this.msg.height = this.height;
            this.fullsize.style.height = "" + (this.height + 40) + "px";
            if (this.isTouch()) return this.container.style.height = "" + Math.max(this.docHeight(),
                this.height + a) + "px"
        };
        d.prototype.positionIframe = function() {
            var a = this;
            this.reposition();
            this.container.style.display = "none";
            this.container.style.visibility = "visible";
            this.container.style.marginLeft = "0";
            x(h, "resize", function() {
                if (a.open) return a.reposition()
            });
            this.positioned = !0;
            if (this.startQueue) return this.startQueue = !1, this.start()
        };
        d.prototype.start = function() {
            if (!this.open)
                if (this.positioned) {
                    if (this.container.style.display = "block", this.oldOverflow = f.documentElement.style.overflow || "", f.documentElement.style.overflow =
                        "hidden", this.open = !0, this.isTouch()) return s.scrollTop = 0
                } else this.startQueue = !0
        };
        d.prototype.stop = function() {
            this.startQueue = !1;
            if (this.open) return this.open = !1, this.container.style.display = "none", f.documentElement.style.overflow = this.oldOverflow
        };
        d.prototype.isTouch = function() {
            return this.touchEvent
        };
        d.prototype.destroy = function() {
            this.stop();
            s.removeChild(this.container);
            return this.fullsize = this.msg = this.container = null
        };
        l.popout = d;
        l = l || {};
        h = window.parent;
        f = h.document;
        k = window.localStorage || null;
        U = window.sessionStorage || null;
        z = "usbl." + "8a67b1361ee1";
        D = null;
        u = [];
        H = [];
        p = [];
        Q = [];
        S = [];
        V = function(a) {
            var b, c, e, d;
            if (0 <= O.call(u, a)) return !0;
            d = a.getTags();
            c = 0;
            for (e = d.length; c < e; c++)
                if (b = d[c], 0 <= O.call(H, b)) return !1;
            u.push(a);
            e = a.getTags();
            a = 0;
            for (c = e.length; a < c; a++) b = e[a], H.push(b);
            return !0
        };
        N = function(a) {
            return "T" === a ? !0 : "F" === a ? !1 : null
        };
        I = function(a) {
            return !0 === a ? "T" : !1 === a ? "F" : ""
        };
        var o = function(a, b) {
            var c;
            this.key = a;
            this.testing = null != b ? b : !1;
            this.clear();
            c = k.getItem(this.key);
            null != c && !this.testing && (c = c.split("/"), 5 === c.length && ("T" === c[0] && (this._clicked = !0), this._version = parseInt(c[1]) || null, this._chanceHit = N(c[2]), this._adCampaign = N(c[3]), this._pageVisitCount = parseInt(c[4] || "0")))
        };
        o.prototype._clicked = null;
        o.prototype._version = null;
        o.prototype._chanceHit = null;
        o.prototype._adCampaign = null;
        o.prototype._pageVisitCount = null;
        o.prototype.save = function() {
            var a;
            if (!this.testing) return a = [], a.push(I(this._clicked)), a.push(this._version || ""), a.push(I(this._chanceHit)),
            a.push(I(this._adCampaign)), null === this._pageVisitCount ? a.push("") : a.push(parseInt(this._pageVisitCount).toString()), k.setItem(this.key, a.join("/"))
        };
        o.prototype.clear = function() {
            this._clicked = !1;
            return this._pageVisitCount = this._adCampaign = this._chanceHit = this._version = null
        };
        o.prototype.clicked = function(a) {
            null == a && (a = null);
            null != a && (this._clicked = !0 === a, this.save());
            return this._clicked
        };
        o.prototype.version = function(a) {
            null == a && (a = null);
            null != a && (this._version = a, this.save());
            return this._version
        };
        o.prototype.chanceHit = function(a) {
            null == a && (a = null);
            null != a && (this._chanceHit = !0 === a, this.save());
            return this._chanceHit
        };
        o.prototype.adCampaign = function(a) {
            null == a && (a = null);
            null != a && (this._adCampaign = !0 === a, this.save());
            return this._adCampaign
        };
        o.prototype.pageVisitCount = function(a) {
            null == a && (a = null);
            null != a && (this._pageVisitCount = a, this.save());
            return this._pageVisitCount
        };
        var K = function(a, b, c) {
            this.campaign = c
        };
        K.prototype.getTags = function() {
            return []
        };
        K.prototype.start = function() {};
        K.prototype.stop =
            function() {};
        d = function(a) {
            this.iframe = a;
            this.triggerUpdate = A(this.triggerUpdate, this);
            this.effect = null;
            this.triggered = !1;
            this.effectData = null;
            this.stopped = !1;
            this.firstTime = !0;
            setTimeout(this.triggerUpdate, 0)
        };
        d.prototype.isBoost = function() {
            return !1
        };
        d.prototype.isTriggered = function() {
            return !1
        };
        d.prototype.initializeEffect = function() {
            var a;
            return this.effect = new(null != (null != (a = this.effectData) ? a.effect : void 0) && null != l[this.effectData.effect] ? l[this.effectData.effect] : K)(this.effectData, this.iframe,
                this)
        };
        d.prototype.getTags = function() {
            null === this.effect && this.initializeEffect();
            return this.effect.getTags()
        };
        d.prototype.stop = function() {
            this.stopped = !0;
            if (null !== this.effect) return this.effect.stop()
        };
        d.prototype.destroy = function() {
            this.stop();
            if (null !== this.effect) return this.effect.destroy(), this.effect = null
        };
        d.prototype.triggerUpdate = function() {
            this.triggered = this.isTriggered();
            if (this.active && !this.stopped && !(null === this.effect && !1 === this.triggered) && V(this))
                if (this.triggered) {
                    if (this.effect.start(),
                        this.firstTime) return this.firstTime = !1, this.activate()
                } else return this.effect.stop()
        };
        d.prototype.activate = function() {};
        d.prototype.success = function() {};
        d.prototype.failure = function() {};
        d.prototype.feedbackClicked = function() {};
        d.prototype.firstFeedback = function() {};
        d.prototype.markAsClicked = function() {};
        var B = function(a, b) {
            this.data = a;
            B.__super__.constructor.call(this, b);
            this.active = !0;
            this.effectData = this.data.e;
            this.trigger = {
                triggered: function() {
                    return !0
                }
            };
            m[this.data.t.type] && (this.trigger = new m[this.data.t.type](this.data.t, {}, this.triggerUpdate))
        };
        J(B, d);
        B.prototype.isTriggered = function() {
            return this.trigger.triggered()
        };
        B.prototype.destroy = function() {
            var a;
            B.__super__.destroy.call(this);
            return "function" === typeof(a = this.trigger).destroy ? a.destroy() : void 0
        };
        T = B;
        var n = function(a, b, c, e) {
            this.id = a;
            this.testing = null != e ? e : !1;
            n.__super__.constructor.call(this, c);
            g.log("campaignNew(" + this.id + ")");
            this.version = parseInt(b.v);
            this.active = b.a;
            this.triggers = null;
            this.effectData = b.e;
            this.storage_name = "" + z + ".c." + this.id;
            this.data =
                new o(this.storage_name, this.testing);
            this.boost = !1;
            g.log("campaignData(" + this.id + ")", this.data);
            this.data.clicked() && (this.active = !1);
            this.active ? (null !== this.data.version() && this.data.version() !== this.version && this.data.clear(), this.data.version(this.version), g.log("campaignTriggerInit(" + this.id + ")", b.t), this.triggers = this.initializeTriggers(b.t), g.log("campaignTriggerInitDone(" + this.id + ")", this.triggers)) : (g.log("campaignStopped(" + this.id + ")"), this.stop())
        };
        J(n, d);
        n.prototype.isBoost = function() {
            return this.boost
        };
        n.prototype.initializeTriggers = function(a) {
            var b, c, e, d;
            d = [];
            c = 0;
            for (e = a.length; c < e; c++) b = a[c], null != m[b.type] && d.push(new m[b.type](b, this.data, this.triggerUpdate));
            return d
        };
        n.prototype.isTriggered = function() {
            var a, b, c, e, d;
            if (this.stopped || null === this.triggers) return !1;
            b = !0;
            d = this.triggers;
            c = 0;
            for (e = d.length; c < e; c++) a = d[c], b && (b = a.triggered());
            g.log("campaignTriggered(" + this.id + ")", b);
            return b
        };
        n.prototype.activate = function() {
            g.log("campaignActivate(" + this.id + ")");
            if (!this.testing) return q.hit(this.id)
        };
        n.prototype.success = function() {
            g.log("campaignSuccess(" + this.id + ")");
            this.data.clicked(!0);
            if (!this.testing) return q.success(this.id)
        };
        n.prototype.successOnFeedback = function() {
            var a = this;
            return this.firstFeedback = function() {
                if (!a.testing) return q.success(a.id)
            }
        };
        n.prototype.failure = function() {
            g.log("campaignFailure(" + this.id + ")");
            this.data.clicked(!0);
            if (!this.testing) return q.fail(this.id)
        };
        n.prototype.feedbackClicked = function() {
            g.log("campaignFeedbackClicked(" + this.id + ")");
            this.testing || q.click(this.id);
            if (null == this.effect.stopOnFeedback || !1 !== this.effect.stopOnFeedback) return this.data.clicked(!0)
        };
        n.prototype.destroy = function() {
            var a, b, c, d, f;
            n.__super__.destroy.call(this);
            if (null !== this.triggers) {
                d = this.triggers;
                f = [];
                b = 0;
                for (c = d.length; b < c; b++) a = d[b], f.push(a.destroy());
                return f
            }
        };
        n.prototype.markAsClicked = function() {
            return this.data.clicked(!0)
        };
        R = n;
        var L = function() {
            this.returning = this.initialized = !1;
            this.key = "" + z + ".v";
            null !== k.getItem(this.key) && this.initialize()
        };
        L.prototype.initialize = function() {
            if (!this.initialized) {
                this.initialized = !0;
                if (null === k.getItem(this.key)) return k.setItem(this.key, 1), f.cookie = "usbls=1;path=/";
                if (!f.cookie.match(/\busbls=1\b/)) return this.returning = !0
            }
        };
        L.prototype.isNew = function() {
            return !this.returning
        };
        L.prototype.isReturning = function() {
            return this.returning
        };
        w = null;
        M = !0;
        window.usabilla_live || (window.usabilla_live = {});
        window.usabilla_live.campaignInit = function(a, b, c, d) {
            var f, g, h, j, l;
            null == b && (b = !1);
            null == c && (c = null);
            null == d && (d = null);
            if (k && U) {
                h = function(a) {
                    var b, c;
                    if (null === a || "usbl.c." !== a.substr(0,
                        7)) return !1;
                    c = a.substr(7);
                    b = k.getItem(a);
                    k.setItem("" + z + ".c." + c, b);
                    return k.removeItem(a)
                };
                if (!(b || 0 === k.length)) {
                    f = j = 0;
                    for (l = k.length - 1; 0 <= l ? j <= l : j >= l; f = 0 <= l ? ++j : --j) h(k.key(f))
                }
                D = new L;
                null === c && (c = Q);
                null === d && (d = S);
                h = 0;
                for (j = p.length; h < j; h++) f = p[h], f.destroy();
                p = [];
                u = [];
                H = [];
                h = [];
                for (g in c) f = c[g], h.push(new R(g, f, a, b));
                p = h;
                c = 0;
                for (g = d.length; c < g; c++) f = d[c], p.push(new T(f, a));
                var m;
                m = [];
                a = 0;
                for (d = p.length; a < d; a++) f = p[a], m.push(f.storage_name);
                a = function(a) {
                    var b;
                    b = z + ".c.";
                    return null === a || 0 <=
                        O.call(m, a) || a.substr(0, b.length) !== b ? !1 : !0
                };
                if (!(b || 0 === k.length)) {
                    c = [];
                    f = b = 0;
                    for (d = k.length - 1; 0 <= d ? b <= d : b >= d; f = 0 <= d ? ++b : --b) a(k.key(f)) && c.push(k.removeItem(k.key(f)));
                    return c
                }
            }
        };
        window.usabilla_live.setCampaignPrefix = function(a) {
            return z = a
        };
        window.usabilla_live.stopCampaignsForFeedback = function() {
            var a, b, c;
            if (null !== w) return w;
            w = [];
            b = 0;
            for (c = u.length; b < c; b++) a = u[b], a.feedbackClicked(), null != a.id && a.isBoost() && w.push(a.id);
            b = 0;
            for (c = p.length; b < c; b++) a = p[b], a.stop();
            return w
        };
        window.usabilla_live.onFeedback =
            function() {
                var a, b, c, d;
                if (M) {
                    M = !1;
                    d = [];
                    b = 0;
                    for (c = u.length; b < c; b++) a = u[b], d.push(a.firstFeedback());
                    return d
                }
        };
        j = function(a) {
            j.loading = j.loading || !1;
            if ("function" === typeof("undefined" !== typeof JSON && null !== JSON ? JSON.stringify : void 0)) "function" === typeof a && a();
            else if (j.loading) j.callbacks = j.callbacks.push(a);
            else return j.loading = !0, j.callbacks = [a], a = document.createElement("script"), a.src = "//cdnjs.cloudflare.com/ajax/libs/json3/3.3.0/json3.min.js", a.onload = function() {
                var a, c, d, f;
                j.loading = !1;
                f = j.callbacks;
                c = 0;
                for (d = f.length; c < d; c++) a = f[c], "function" === typeof a && a();
                return j.callbacks = []
            }, document.getElementsByTagName("head")[0].appendChild(a)
        }
    }).call(this);
})();

(function() {
    var b = "https:\/\/d6tizftlrpuof.cloudfront.net\/live\/",
        d = "body { background: transparent; padding: 0; margin: 0; text-align: left; } img { cursor: pointer; display: block; margin: 0 auto; }",
        g = "<img src='resources/buttons/dela_right_side_lower.png' width='34' height='120' />",
        h = window.parent.document;
    "http:" == h.location.protocol && (b = b.replace("https://", "http://"));
    window.usabilla_live = window.usabilla_live || {};
    window.usabilla_live.createIframe = function(c) {
        var e, f = ["<!DOCTYPE html>\n<html>", '<base href="' + b + '"></base>', "<style type='text/css'>", d, "</style>\n<body>", g, "</body>\n</html>"].join("\n"),
            a = h.createElement("iframe");
        a.src = /MSIE[ ]+6/.test(navigator.userAgent) ? "javascript:false" : "";
        a.style.width = "34px";
        a.style.height = "120px";
        a.style.margin = "0";
        a.style.padding = "0";
        a.style.border = "0";
        a.style.overflow = "hidden";
        a.style.zIndex = 9998;
        a.style.position = "absolute";
        a.style.left = "0";
        a.style.top =
            "0";
        a.style["box-shadow"] = "0 0 0";
        a.style.backgroundColor = "transparent";
        a.frameBorder = 0;
        a.marginWidth = 0;
        a.marginHeight = 0;
        a.scrolling = "no";
        a.allowTransparency = !0;
        a.setAttribute("data-tags", "right");
        c.appendChild(a);
        var c = a.contentWindow,
            i = h.body.scrollTop || 0;
        try {
            c.document.open()
        } catch (j) {
            e = "javascript:document.open();document.domain='" + h.domain + "';", a.src = e + "void(0);"
        }
        try {
            c.document.write(f), c.document.close()
        } catch (k) {
            a.src = e + 'document.write("' + f.replace(/"/g, String.fromCharCode(92) + '"') + '");document.close();'
        }
        try {
            a.contentWindow.document.body.scrollTop =
                0, h.location.toString().match(/#(top)?$/) && (h.body.scrollTop = i)
        } catch (l) {}
        return a
    };
})();

(function() {
    var b = null,
        d = window.parent,
        f = d.document,
        g = b,
        i = b,
        j = b,
        k = window.usabilla_live = window.usabilla_live || {}, l = b,
        m = window.usabilla_live_settings = {
            local_data: {},
            form: b,
            zIndex: 9999
        }, n = !0,
        o = b,
        p = !1;

    function q() {
        var a, c;
        "undefined" != typeof d.innerWidth ? (a = d.innerWidth, c = d.innerHeight) : "undefined" != typeof f.documentElement && "undefined" != typeof f.documentElement.clientWidth && 0 != f.documentElement.clientWidth ? (a = f.documentElement.clientWidth, c = f.documentElement.clientHeight) : (a = f.getElementsByTagName("body")[0].clientWidth, c = f.getElementsByTagName("body")[0].clientHeight);
        d.open("http://api.usabilla.com/v2/f/" + "8a67b1361ee1" + "?w=" + a + "&h=" + c + "&url=" + encodeURIComponent(window.location), "_blank", "height=470,width=465")
    }
    if (d != window) {
        k.onParentLoad(function() {
            var a = "position:fixed;width:34px;height:120px;z-index:999;right:0px;top:75%;margin-top:-68px",
                c = f.body;
            j !== b && (c = f.getElementById(j) || c);
            g = f.createElement("div");
            g.className = "usabilla_live_button_container";
            g.setAttribute("style", a);
            g.setAttribute("class", "usabilla_live_button_container");
            "setAttribute" in g.style && g.style.setAttribute("cssText", a, 0);
            c.appendChild(g);
            i = g.style.display;
            if (/MSIE[ ]+(6|7)/.test(navigator.userAgent)) {
                g.style.display = "none";
                for (p = !0; 0 < r.length;) r.shift()()
            } else {
                0 < f.getElementsByTagName("head").length && (a =
                    f.createElement("style"), a.setAttribute("type", "text/css"), a.setAttribute("media", "print"), a.styleSheet ? a.styleSheet.cssText = ".usabilla_live_button_container { display: none; }" : a.appendChild(f.createTextNode(".usabilla_live_button_container { display: none; }")), f.getElementsByTagName("head")[0].appendChild(a));
                o = k.createIframe(g);
                k.buttonClick = function() {
                    function a() {
                        if (!t) {
                            t = true;
                            f.body.removeChild(e)
                        }
                    }
                    var c = k.stopCampaignsForFeedback();
                    l === b && (l = window.lightningjs.require("usabilla_live_feedback",
                        "//w.usabilla.com/feedbacklet"));
                    var v = l,
                        w = "8a67b1361ee1",
                        e = f.createElement("div");
                    e.style.position = "fixed";
                    e.style.zIndex = "" + m.zIndex;
                    e.style.top = 0;
                    e.style.left = 0;
                    e.style.right = 0;
                    e.style.bottom = 0;
                    e.style.background = "#555";
                    e.style.opacity = "0.8";
                    e.style.filter = "alpha(opacity=80)";
                    f.body.appendChild(e);
                    var h = f.createElement("div");
                    h.style.position = "absolute";
                    h.style.left = "50%";
                    h.style.top = "50%";
                    h.style.margin = "-32px 0 0 -32px";
                    h.style.width = "64px";
                    h.style.height = "64px";
                    h.style.backgroundImage = "url(https://d6tizftlrpuof.cloudfront.net/live/resources/throbber.gif)";
                    e.appendChild(h);
                    var t = false;
                    setTimeout(a, 15E3);
                    v("start", w, c, m, a, k.onFeedback)
                };
                for (k.onEvent(o.contentWindow.document, "click", function() {
                    k.buttonClick()
                }); 0 < r.length;) r.shift()();
                n && k.campaignInit(o)
            }
        });
        var r = [],
            s = function(a) {
                g !== b ? a() : r.push(a)
            };
        window.lightningjs.provide("usabilla_live", {
            setStyle: function(a) {
                s(function() {
                    for (var c in a) a.hasOwnProperty(c) && (g.style[c] = a[c])
                })
            },
            setButtonZIndex: function(a) {
                s(function() {
                    g.style.zIndex = a
                })
            },
            setInterfaceZIndex: function(a) {
                m.zIndex = parseInt(a)
            },
            setParent: function(a) {
                j = a
            },
            show: function() {
                s(function() {
                    g.style.display = i
                })
            },
            hide: function() {
                s(function() {
                    g.style.display = "none"
                })
            },
            data: function(a) {
                m.local_data = a
            },
            setCampaign: function(a, c, u) {
                n = !1;
                s(function() {
                    k.campaignInit(o, u, a, c)
                })
            },
            trigger: k.campaignTrigger,
            popup: q,
            click: function() {
                p ? q() : s(function() {
                    k.buttonClick()
                })
            },
            setForm: function(a) {
                m.form = a
            }
        })
    };
})();