console.log("producer...");

import Kafka from 'node-rdkafka'

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {topic: 'test'});

const obj = {name: "Denizhan Toprak", age: 21, city: "Izmir"};
const myJSON = JSON.stringify(obj);

function queueMessage(){
  const success = stream.write(Buffer.from(myJSON));
  if(success)
  {
    console.log("Message wrote successfully to stream");
  }
  else {
    console.log("An Error occured while writing message to stream");
  }
}

setInterval(() => {
  queueMessage();
}, 3000);