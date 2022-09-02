import  ReconnectingWebSocket from 'reconnecting-websocket'
import {Connection} from 'sharedb/lib/client'
import * as json1 from 'ot-json1';

window.ReconnectingWebSocket = ReconnectingWebSocket
var socket = new ReconnectingWebSocket('ws://localhost:8080/foo')
var connection = new Connection(socket)

var doc = connection.get('doc-collection', 'doc-id')

doc.subscribe((error) => {
  if (error) return console.error(error)

  // If doc.type is undefined, the document has not been created, so let's create it
  if (!doc.type) {
    doc.create({counter: 0}, (error) => {
      if (error) console.error(error)
    })
  }
});

doc.on('op', (op) => {
  console.log('count', doc.data.counter, op)
})

window.increment = (obj) => {
  // Increment the counter by 1
  doc.submitOp(obj || [{p: ['counter'], na: 1}])
}