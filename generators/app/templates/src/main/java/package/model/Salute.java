package <%= props.package %>.<%= props.artifact %>.model;

public class Salute {

    private final long count;
    private final String content;

    public Salute(long count, String content) {
        this.count = count;
        this.content = content;
    }

    public long getCount() {
        return count;
    }

    public String getContent() {
        return content;
    }
}
