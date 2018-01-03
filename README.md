# PreciseTimeout

[![npm](https://img.shields.io/npm/v/precisetimeout.svg?maxAge=3600)](https://www.npmjs.com/package/precisetimeout)
[![npm](https://img.shields.io/npm/dt/precisetimeout.svg?maxAge=3600)](https://www.npmjs.com/package/precisetimeout)
[![Build Status](https://travis-ci.org/kyranet/PreciseTimeout.svg?branch=master)](https://travis-ci.org/kyranet/PreciseTimeout)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kyranet/PreciseTimeout/master/LICENSE)

Set highly-accurate timeouts for your projects

## What is this package for?

The built-in `setTimeout` is certainly not accurate after long times (over 10 minutes), and handling the imprecision is quite hard without recursion. On the other side, it is relatively easy to correct that error when it's a **promisified** timeout, however, `util.promisify(setTimeout)` effectively returns a method that, when called, it can't be stopped (unlike the normal timeout, which can be stopped with [`clearTimeout`](https://nodejs.org/api/timers.html#timers_cleartimeout_timeout)) but is easier to run.

This package allows developers to set their highly-accurate promisified timeouts that can be cancelled anytime. This package can also be used easily in TypeScript as typings are included aswell.

> **Note**: Minimum version required is node.js `7.6.0` or newer without the flag due to the usage of `async`/`await`, however, I highly suggest to use at least node.js `8.0.0`.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

**Indev version**:

```
git clone https://github.com/kyranet/PreciseTimeout.git
```

**Stable version**:

```
npm i precisetimeout
```
