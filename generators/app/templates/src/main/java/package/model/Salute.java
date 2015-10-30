package hello;

public class Salute {

    private final long id;
    private final String content;

    public Salute(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
