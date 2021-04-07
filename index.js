const { LNode } = require('./ListNode')
const LinkList = require('./LinkList')
const DoubleLinkList = require('./DoubleLinkList')

let list = new LinkList()

list.append(new LNode(1))
list.append(new LNode(2))
list.append(new LNode(3))
list.append(new LNode(4))

list.paint()
console.log(list.size());
console.log(list.get(0).value);
console.log(list.get(2).value);
list.delete(0)
console.log(list.get(0).value);
console.log(list.size());
list.insert(new LNode(0), 1)
list.paint()
