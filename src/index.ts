export type EventName = string | symbol;
export type EventListener = (name: EventName, data: any) => void;

export interface IEventDispatcher {
	/**
	 * Register a listener with the dispatcher.
	 */
	listen(event: EventName, listener: EventListener): () => void;

	/**
	 * Register many listeners with the dispatcher.
	 */
	listenMany(events: [EventName, EventListener][]): Map<EventName, () => void>;

	/**
	 * Register a one-time listener with the dispatcher.
	 */
	listenOnce(name: EventName, listener: EventListener): void;

	/**
	 * Remove a listener from the dispatcher.
	 */
	forget(event: EventName, listener: EventListener): void;

	/**
	 * Remove many listeners from the dispatcher.
	 */
	forgetMany(events: [EventName, EventListener][]): void;

	/**
	 * Remove all listeners from the dispatcher.
	 */
	flush(): void;

	/**
	 * Get all of the listeners for a given event name.
	 */
	getListeners(event: EventName): EventListener[];

	/**
	 * Determine if a given event has listeners.
	 */
	hasListeners(event: EventName): boolean;

	/**
	 * Fire an event and call the listeners in asynchronous order.
	 */
	dispatch<T = any>(event: EventName, data?: T): Promise<void>;

	/**
	 * Fire an event and call the listeners in sequential order.
	 */
	dispatchSeq<T = any>(event: EventName, data?: T): Promise<void>;

	/**
	 * Fire an event and call the listeners in synchronous order.
	 */
	dispatchSync<T = any>(event: EventName, data?: T): void;

	/**
	 * Fire many events and call the listeners in asynchronous order.
	 */
	dispatchMany<T = any>(events: [EventName, T][]): Promise<void>;

	/**
	 * Fire many events and call the listeners in sequential order.
	 */
	dispatchManySeq<T = any>(events: [EventName, T][]): Promise<void>;

	/**
	 * Fire many events and call the listeners in synchronous order.
	 */
	dispatchManySync<T = any>(events: [EventName, T][]): void;
}
