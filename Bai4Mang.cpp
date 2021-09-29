#include <iostream>
using namespace std;

void EnQueue(int Queue[],int x, int &Rear, int capacity)
{
    if(Rear == capacity)
    {
        cout << "OverFlow!" << endl;
    }
    else{
        Queue[Rear] = x;
        Rear++;
    }
}
void DeQueue(int Queue[], int Front, int &Rear){
    if(Front == Rear)
    {
        cout << "Queue is empty!" << endl;
    }
    else{
        for(int i = 0; i < Rear - 1 ; i++)
        {
            Queue[i] = Queue[i+1];
        }
        Rear--;
    }
}
int main() {
    int capacity = 100;
    int Queue[capacity];
    int Front = 0;
    int Rear = 0;
    int n;
    cin >> n;
    for(int i = 0; i < n; i++)
    {
         string s;
         cin >> s;
         if(s == "Enqueue"){
            int x;
            cin >> x;
            EnQueue(Queue, x,Rear, capacity);
         }
         if(s == "Dequeue")
            DeQueue(Queue, Front, Rear);
    }
    for(int i = 0; i < Rear; i++)
    {
        cout << Queue[i]<<" ";
    }
    return 0;
}
