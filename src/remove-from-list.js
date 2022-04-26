const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function convertArrayToList(arr) {
	return arr.reverse().reduce((acc, cur) => {
		if (acc) {
			const node = new ListNode(cur);
			node.next = acc;
			return node;
		}

		return new ListNode(cur);
	}, null);
}

function removeKFromList(l, k) {
	let nextNode = l.next;
	let currentNode = l;

	while (nextNode !== null) {
		if (currentNode.value === k) {
			if (currentNode.next !== null) {
				currentNode.value = currentNode.next.value;
				currentNode.next = currentNode.next.next;
			} else {
				currentNode = null;
				nextNode = null;
			}

		} else {
			if (currentNode.next.value === k && currentNode.next.next === null) {
				currentNode.next = null;
			}
			currentNode = nextNode;
			nextNode = nextNode.next;
		}	
	}

	return l;
}


console.log(removeKFromList(convertArrayToList([3, 1, 3, 4, 3]), 3));

module.exports = {
	removeKFromList
};
