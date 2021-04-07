const { LNode } = require('./ListNode')

class LinkList {

    constructor() {
        this.head = new LNode(null)
    }

    append(node) {
        let p = this.head
        while (p.next) {
            p = p.next
        }
        p.next = node
    }

    delete(index) {
        if (index > this.size() - 1) return
        let p = this.get(index - 1)
        const next = p.next
        p.next = p.next.next
        next.next = null
    }

    get(index) {
        if (index > this.size() - 1) return
        let p = this.head
        while (p && index + 1) {
            p = p.next
            index--
        }
        return p
    }

    insert(node, index) {
        if (index > this.size() - 1) return
        let p = this.get(index - 1)
        const next = p.next
        p.next = node
        node.next = next
    }

    size() {
        let count = 0
        let p = this.head
        while (p) {
            p = p.next
            count++
        }
        return count - 1
    }

    paint() {
        let draw = ['head']
        let p = this.head.next
        while (p) {
            draw.push(p.value)
            p = p.next
        }
        draw.pop()
        draw.push('tail')
        console.log(draw.join(' -> '));
    }

}

module.exports = LinkList