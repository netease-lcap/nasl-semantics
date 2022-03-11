import java.util.LinkedList;

class School {
    String name;

    public School(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "School " + this.name;
    }
}

public class ForEachDemo {
    public static void main(String[] args) {
        int a = 3;
        LinkedList<School> list = new LinkedList<School>();
        for (int i = 0; i < 20; i++) {
            list.add(new School("" + i));
        }

        // list.forEach(item -> System.out.println(item));

        for (int i = a; i < list.size() - 3; i++) {
            School item = list.get(i);
            // body
            System.out.println(item);
        }


        list.stream().forEach(item -> System.out.println(item));
    }
}
