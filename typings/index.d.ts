declare module 'precisetimeout' {

	export default class PreciseTimeout {
		public constructor(time: number);
		public endsAt: number;
		public stopped: boolean;
		private resolve?: Function;
		private timeout?: NodeJS.Timer;

		public run(): Promise<boolean>;
		public stop(): Promise<boolean>;
	}

}
