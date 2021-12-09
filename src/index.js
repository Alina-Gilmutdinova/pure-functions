export default function checkHealth(object) {
   let result = object.health > 50 ? 'healthy' : 'wounded';
 
   if (object.health < 15) {
     result = 'critical';
   }
 
   return result;
 }

 //Здоровье более 50 - зелёный;
//Здоровье от 50 и до 15 - жёлтый;
//Менее 15 - красный.
//И возвращает ответ в виде одной из строк: healthy, wounded, critical