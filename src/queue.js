const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.nodes = null;
	}
	getUnderlyingList() {
		return this.nodes;
	}

	enqueue(value) {
		let newNode = new ListNode(value);

		if (this.nodes === null) {
			this.nodes = newNode;
		} else {
			let nextNode = this.nodes.next;
			let currentNode = this.nodes;

			while (nextNode !== null) {
				currentNode = nextNode;
				nextNode = nextNode.next;
			}

			currentNode.next = newNode;
		}
	}

	dequeue() {
		let deleted = this.nodes.value;

		if (this.nodes.next !== null) {
			this.nodes.value = this.nodes.next.value;
			this.nodes.next = this.nodes.next.next;
		} else {
			this.nodes = null;
		}

		return deleted;
	}
}

module.exports = {
	Queue
};
