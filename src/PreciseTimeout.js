module.exports = class PreciseTimeout {

	/**
	 * Create a new PreciseTimeout
	 * @param {number} time The time in milliseconds to run
	 */
	constructor(time) {
		/**
		 * @type {number}
		 */
		this.endsAt = Date.now() + time;

		/**
		 * @type {boolean}
		 */
		this.stopped = false;

		/**
		 * @type {?Function}
		 * @private
		 */
		this.resolve = null;

		/**
		 * @type {?Timeout}
		 * @private
		 */
		this.timeout = null;
	}

	/**
	 * Run the timeout
	 * @since 1.0.0
	 * @returns {Promise<boolean>}
	 */
	async run() {
		if (this.stopped) return false;

		while (!this.stopped && Date.now() < this.endsAt) {
			await new Promise(resolve => {
				this.resolve = resolve;
				this.timeout = setTimeout(() => this.resolve(), Date.now() - this.endsAt);
			});
		}

		this.stopped = true;
		return true;
	}

	/**
	 * Stop the timeout
	 * @since 1.0.0
	 * @returns {boolean}
	 */
	stop() {
		if (this.stopped) return false;

		this.stopped = true;
		if (this.timeout) clearTimeout(this.timeout);
		if (this.resolve) this.resolve();
		return true;
	}

};
